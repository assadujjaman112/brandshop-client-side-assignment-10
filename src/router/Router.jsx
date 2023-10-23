import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";
import BrandDetails from "../components/BrandDetails";
import MyCart from "../pages/MyCart";
import ProductDetails from "../components/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import UpdateProduct from "../pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/brands/:name",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("https://brand-shop-server-hla13wpfm-assadujjamans-projects.vercel.app/products"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-hla13wpfm-assadujjamans-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-hla13wpfm-assadujjamans-projects.vercel.app/products/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader : () => fetch("https://brand-shop-server-hla13wpfm-assadujjamans-projects.vercel.app/myCollection")
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
