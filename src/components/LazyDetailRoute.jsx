import React, { startTransition, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const INITIAL_STATE = {
  PageComponent: null,
  item: null,
  isResolved: false,
};

function RouteLoadingFallback() {
  return (
    <div className="longTextContainer" style={{ padding: "1rem 0" }}>
      Loading...
    </div>
  );
}

export default function LazyDetailRoute({
  loadPage,
  loadData,
  propKey,
  resolveItem,
}) {
  const { slug = "" } = useParams();
  const [state, setState] = useState(INITIAL_STATE);

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
          });
        });
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        startTransition(() => {
          setState({
            PageComponent: null,
            item: null,
            isResolved: true,
          });
        });
      });

    return () => {
      isActive = false;
    };
  }, [loadData, loadPage, resolveItem, slug]);

  if (!state.isResolved) {
    return <RouteLoadingFallback />;
  }

  if (!state.PageComponent) {
    return null;
  }

  const PageComponent = state.PageComponent;
  return <PageComponent {...{ [propKey]: state.item }} />;
}
