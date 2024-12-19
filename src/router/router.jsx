import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Logins from "../pages/Logins";


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