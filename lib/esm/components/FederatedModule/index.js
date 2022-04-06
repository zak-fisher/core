import * as React from 'react';
import { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
var FederatedModule = function (_a) {
    var children = _a.children, _b = _a.loading, loading = _b === void 0 ? 'Loading...' : _b, _c = _a.error, error = _c === void 0 ? 'Error :/' : _c;
    return (React.createElement(ErrorBoundary, { error: error },
        React.createElement(Suspense, { fallback: loading }, children)));
};
export default FederatedModule;
//# sourceMappingURL=index.js.map