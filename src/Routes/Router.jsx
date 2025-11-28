import { createBrowserRouter } from "react-router";
import About from "../Pages/About";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layout/AuthLayout";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import CompanyDetails from "../Pages/CompanyDetails";
import Loading from "../Components/Loading";
import OtherLayout from "../Layout/OtherLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/company-details/:id",
        element: <CompanyDetails></CompanyDetails>,
        loader: () => fetch("/Companies.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/other",
    element: <OtherLayout></OtherLayout>,
    children: [
      {
        path: "/other/about",
        element: <About />,
      },
      {
        path: "/other/contactus",
        element: <ContactUs />,
      },
    ],
  },

  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
