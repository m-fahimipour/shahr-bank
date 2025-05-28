//@Providers
import { ReactRouterProvider } from "~/providers/ReactRouterProvider";
import { ReduxProvider } from "~/providers/ReduxProvider";
//------------------------------------------------------

//@Third-Party
import { ToastContainer } from "react-toastify";
//------------------------------------------------------

export function Providers() {
  return (
    <ReduxProvider>
      <ReactRouterProvider />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ReduxProvider>
  );
}
