import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CardsDesktop } from "./screens/CardsDesktop";
import { CardsDesktopScreen } from "./screens/CardsDesktopScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <CardsDesktop />,
  },
  {
    path: "/cardsu47desktopu951920",
    element: <CardsDesktop />,
  },
  {
    path: "/cardsu47desktopu9519202",
    element: <CardsDesktopScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
