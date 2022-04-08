import * as React from "react";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <RecoilRoot>
    {children}
  </RecoilRoot>
);

export default AppProvider;
