import { createBrowserRouter, Link } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SIgnIn from "../pages/SignIn/SIgnIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoutes from "../routes/PrivateRoutes";
import MyApplications from "../pages/MyApplication/MyApplications";
import AddJobs from "../Recruiters/AddJobs/AddJobs";
import MyPostedJobs from "../Recruiters/MypostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/viewApplications";
import AllJobs from "../pages/AllJobs/AllJobs";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";


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
        path:"/blogs",
        Component:AllBlogs
      },
      {
        path:"/blog/:id",
        Component:BlogDetails,
        loader: ({params}) => 
          fetch(`http://localhost:3000/blogs/${params.id}`)
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/allJobs",
        Component: AllJobs,
        loader: async () => {
          const res = await fetch("http://localhost:3000/jobs");
          return res.json(); // ✔ MUST parse JSON
        },
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <JobApply></JobApply>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addJOb",
        element: (
          <PrivateRoutes>
            <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoutes>
            <ViewApplications />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      },
    ],
  },
]);

export default router;
