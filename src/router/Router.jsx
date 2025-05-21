import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/signIn/SignIn";
import LogIn from "../pages/logIn/LogIn";
import ErrorPage from "../pages/error/ErrorPage ";
import TestPrivate from "../pages/TestPrivate";
import Private from "../private/Private";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/MyCart";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/signin",
          element:<LogIn/>
        },
        {
          path:"/signup",
          element:<SignIn/>
        },
        {
          path:"/private",
          element:<Private><TestPrivate/></Private>
        }
      ]
    },{
      path:"/dashboard",
      element:<Private><Dashboard/></Private>,
      children:[
        {
          path:"cart",
          element:<Private><MyCart/></Private>
        }
      ]

    }
  ]);


  export default router;