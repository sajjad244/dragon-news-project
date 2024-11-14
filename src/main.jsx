import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import CNews from "./components/Pages/CNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CNews></CNews>,
        loader: ({params}) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <div>News world!</div>,
  },
  {
    path: "auth",
    element: <div>LogIn</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
