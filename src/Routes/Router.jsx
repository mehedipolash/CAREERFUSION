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
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path:"/company-details/:id",
        element:<CompanyDetails></CompanyDetails>,
        loader: () => fetch("/Companies.json"),
        hydrateFallbackElement: <Loading></Loading>,
      }
      
      
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
