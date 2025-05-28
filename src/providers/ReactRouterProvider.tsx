//@Third-Party
import { RouterProvider } from "react-router";
//------------------------------------------------------

//@Routes
import { router } from "~/routes";
//------------------------------------------------------

export function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
