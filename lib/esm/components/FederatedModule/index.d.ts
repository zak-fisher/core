import { ReactNode, SuspenseProps } from "react";
export declare type FederatedModuleProps = {
    children: ReactNode;
    loading?: SuspenseProps['fallback'];
    error?: SuspenseProps['fallback'];
};
declare const FederatedModule: ({ children, loading, error }: FederatedModuleProps) => JSX.Element;
export default FederatedModule;
