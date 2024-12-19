import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Logins from "../pages/Logins";
import JobDetails from "../pages/Home/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<h2>Error Page</h2>,
    children:[
     {
      path:"/",
      element:<Home></Home>,
     },
     {
      path:"/jobs/:id",
      element:<JobDetails></JobDetails>,
      loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
     },
     {
      path:"/register",
      element:<Register></Register>
     },
     {
      path:"/login",
      element:<Logins></Logins>
     }
    ]
  },
]);

export default router;