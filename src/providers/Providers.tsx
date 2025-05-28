//@Providers
import { ReactRouterProvider } from "~/providers/ReactRouterProvider";
import { ReduxProvider } from "~/providers/ReduxProvider";
//------------------------------------------------------

export function Providers() {
  return (
    <ReduxProvider>
      <ReactRouterProvider />
    </ReduxProvider>
  );
}
