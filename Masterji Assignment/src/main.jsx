import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Otp from "./pages/Otp.jsx";
import Batch from "./pages/Batch.jsx";
import CourseList from "./pages/Course.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/otp-form",
    element: <Otp />,
  },
  {
    path: "/course-list",
    element: <CourseList />,
  },
  {
    path: "/batches",
    element: <Batch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
