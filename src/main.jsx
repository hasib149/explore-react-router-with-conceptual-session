import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Home from "./Components/Pages/Home.jsx";
import RootLayout from "./Components/Layouts/RootLayout.jsx";
import PlantsDetails from "./Components/Pages/PlantsDetails.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/plantsDetails/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantsDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
