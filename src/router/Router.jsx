import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../../AddProduct";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";



const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/addproduct",
                element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path : "/signup",
                element : <SignUp></SignUp>
            },
            {
                path : "/login",
                element : <Login></Login>
            }

        ]
    }
])

export default router;