import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
   children:[
    {index:true, Component:Home},
    {path:"*",Component:ErrorPage},
    {path:"/blog",Component:ErrorPage},
    {path:"//portfolio",Component:Portfolio},
   ]
  }
]);
export default router;