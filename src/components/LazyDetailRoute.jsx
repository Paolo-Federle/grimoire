import React, { startTransition, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RouteLoadError, RouteLoadingFallback, RouteNotFound } from "./RouteFeedback";

const INITIAL_STATE = {
  PageComponent: null,
  item: null,
  isResolved: false,
  error: null,
};

export default function LazyDetailRoute({
  loadPage,
  loadData,
  propKey,
  resolveItem,
}) {
  const { slug = "" } = useParams();
  const [state, setState] = useState(INITIAL_STATE);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    setState(INITIAL_STATE);

    Promise.all([loadPage(), loadData()])
      .then(([pageModule, dataModule]) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            PageComponent: pageModule.default,
            item: resolveItem({ dataModule, slug }),
            isResolved: true,
            error: null,
          });
        });
      })
      .catch((error) => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            PageComponent: null,
            item: null,
            isResolved: true,
            error,
          });
        });
      });

    return () => {
      isActive = false;
    };
  }, [loadData, loadPage, resolveItem, retryCount, slug]);

  if (!state.isResolved) {
    return <RouteLoadingFallback />;
  }

  if (state.error) {
    return <RouteLoadError onRetry={() => setRetryCount((count) => count + 1)} />;
  }

  if (!state.PageComponent || !state.item) {
    return <RouteNotFound title="Content not found" />;
  }

  const PageComponent = state.PageComponent;
  return <PageComponent {...{ [propKey]: state.item }} />;
}
