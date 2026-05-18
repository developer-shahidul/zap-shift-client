import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Coverage/Coverage";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () =>
          fetch("/data/serviceCenters.json").then((res) => res.json()),
      },
    ],
  },
]);

export default Router;
