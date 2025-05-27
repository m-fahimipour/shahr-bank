import { ReactRouterProvider } from "./ReactRouterProvider";
import { ReduxProvider } from "./ReduxProvider";

export function Providers() {
  return (
    <ReduxProvider>
      <ReactRouterProvider />
    </ReduxProvider>
  );
}
