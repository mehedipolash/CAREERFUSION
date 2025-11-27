import { createBrowserRouter } from "react-router";
import About from "../Pages/About";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layout/AuthLayout";
import JobDetails from "../Pages/JobDetails";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import JobNews from "../Pages/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />, // optional home page
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "job-details/:id",
        element: <JobDetails />,
      },
      
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
  },

  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default router;
