import React from "react";
import { useLocation } from "react-router-dom";
import { RouteLoadError } from "./RouteFeedback";

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled application render error", error, errorInfo);
  }

  componentDidUpdate(previousProps) {
    if (this.state.error && previousProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    if (this.state.error) {
      return <RouteLoadError onRetry={() => this.setState({ error: null })} />;
    }

    return this.props.children;
  }
}

export default function AppErrorBoundary({ children }) {
  const location = useLocation();
  return <ErrorBoundary resetKey={location.pathname}>{children}</ErrorBoundary>;
}
