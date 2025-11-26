import { createBrowserRouter } from "react-router";
import About from "../Pages/About";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layout/AuthLayout";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about-us",
    element: <About />,
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
]);

export default router;