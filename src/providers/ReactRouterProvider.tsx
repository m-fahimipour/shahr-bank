import { RouterProvider } from "react-router";
import { router } from "../routes";

export function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
