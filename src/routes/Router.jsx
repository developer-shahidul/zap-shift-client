import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Error from "../Pages/Error/Error";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Login/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Rider from "../Pages/rider/Rider";
import SendPercel from "../Pages/SendPercel/SendPercel";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcels from "../Pages/dashboard/myParcels/MyParcels";
import Details from "../Pages/dashboard/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/send-percel",
        element: (
          <PrivateRoute>
            <SendPercel></SendPercel>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("/data/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () =>
          fetch("/data/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/about",
        Component: AboutUs,
        loader: () => fetch("/data/aboutUs.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "myParcels", element: <MyParcels></MyParcels> },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/parcels/${params.id}`).then((res) =>
            res.json(),
          ),
      },
    ],
  },
]);

export default Router;
