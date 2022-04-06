// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/
import { Component, ErrorInfo, ReactNode, SuspenseProps } from "react";

export type ErrorBoundaryProps = {
  children: ReactNode;
  error?: SuspenseProps['fallback'],
}

export type ErrorBoundaryState = {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.error;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
