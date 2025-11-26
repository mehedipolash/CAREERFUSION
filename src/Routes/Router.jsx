import { createBrowserRouter } from "react-router";
import About from "../Pages/About";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layout/AuthLayout";
import JobDetails from "../Pages/JobDetails";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactus",
    element:<ContactUs></ContactUs>

  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn> 
  },
  {
    path: "/signup",
    element: <Signup></Signup> 
  },
  {
  }
]);

export default router;