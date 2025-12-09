import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SIgnIn from "../pages/SignIn/SIgnIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoutes from "../routes/PrivateRoutes";
import MyApplications from "../pages/MyApplication/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SIgnIn,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: "/job-apply/:id",
        element: <PrivateRoutes> <JobApply></JobApply> </PrivateRoutes>
      },
      {
        path:"/my-applications",
        element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
      }
    ],
  },
]);

export default router;
