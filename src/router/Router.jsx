import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";
import BrandDetails from "../components/BrandDetails";



const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch("/data.json")
            },
            {
                path : "/brands/:name",
                element : <BrandDetails></BrandDetails>,
                loader : () => fetch("http://localhost:5000/products")
            },
            {
                path : "/addProduct",
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