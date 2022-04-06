import { Component, ErrorInfo, ReactNode, SuspenseProps } from "react";
export declare type ErrorBoundaryProps = {
    children: ReactNode;
    error?: SuspenseProps['fallback'];
};
export declare type ErrorBoundaryState = {
    hasError: boolean;
};
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    static getDerivedStateFromError(_: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): {} | null | undefined;
}
export default ErrorBoundary;
