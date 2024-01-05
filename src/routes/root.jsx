import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductesPage from "../pages/ProductesPage";
import CartPage from "../pages/CartPage";
import ProducteDetals, { loader } from "../pages/ProducteDetals";


const router = createBrowserRouter([
  {
    path: "*",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Productes",
    element: <ProductesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cartPage",
    element: <CartPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Productes/:producteid",
    element: <ProducteDetals />,
    errorElement: <ErrorPage />,
    loader:loader
  },
],
);

export default router;