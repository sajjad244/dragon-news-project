import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import CNews from "./components/Pages/CNews";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import AuthProvider from "./provider/AuthProvider";
import NewsDetails from "./components/Pages/NewsDetails";

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
    path: "/news/:id",
    element: <NewsDetails></NewsDetails>,
    loader: ({params}) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
