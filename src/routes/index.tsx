import { createBrowserRouter } from "react-router";
import MainPage from "../pages/main";
import UserPage from "../pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:userId",
    element: <UserPage />,
  },
]);
