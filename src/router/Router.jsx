import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/signIn/SignIn";
import LogIn from "../pages/logIn/LogIn";
import ErrorPage from "../pages/error/ErrorPage ";



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
        }
      ]
    },
  ]);


  export default router;