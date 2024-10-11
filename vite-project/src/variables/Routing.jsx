import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home/Home";
import Products from "../components/Pages/products/Products";
import Singleproduct from "../components/Pages/products/Singleproduct";
import NotFound from "../components/NotFound";

export const Routing = createBrowserRouter([{path: "/", element: <Layout/> , children: [
    {index:true, element: <Home/>},
    {path:"/products", element: <Products/>},
    {path:"/products/:category/:id/:title", element: <Singleproduct/>},
]},
{path:"/*" , element:<NotFound/>},
])