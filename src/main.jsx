import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EmailPassCreateUser from "./emailPassCreateUser.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/login form/login.jsx";
import Register from "./component/RegisterForm/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmailPassCreateUser />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
