import AppProvider from "./components/AppProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import FederatedModule from "./components/FederatedModule";

import servers from "./config/servers";
import sharedDeps from "./config/shared-deps";

export default {
  components: {
    AppProvider,
    ErrorBoundary,
    FederatedModule,
  },
  config: {
    servers,
    sharedDeps
  },
}
