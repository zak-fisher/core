import * as React from 'react';
import { ReactNode, SuspenseProps, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";

export type FederatedModuleProps = {
  children: ReactNode,
  loading?: SuspenseProps['fallback'],
  error?: SuspenseProps['fallback'],
}

const FederatedModule = ({
  children,
  loading = 'Loading...',
  error = 'Error :/'
}: FederatedModuleProps) => (
  <ErrorBoundary error={error}>
    <Suspense fallback={loading}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

export default FederatedModule;
