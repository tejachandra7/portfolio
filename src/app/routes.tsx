import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OneLernCaseStudy from "./pages/OneLernCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/case-study/onelern-assessments",
    element: <OneLernCaseStudy />,
  },
]);
