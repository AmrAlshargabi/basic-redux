import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductesPage from "../pages/ProductesPage";
import CartPage from "../pages/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ProductesPage",
    element: <ProductesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CartPage",
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
],
);

export default router;