//@Components
import MainPage from "~/pages/main";
import UserPage from "~/pages/user";
//------------------------------------------------------

//@Third-Party
import { createBrowserRouter } from "react-router";
//------------------------------------------------------


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
