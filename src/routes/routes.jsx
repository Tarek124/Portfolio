import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Educarion from "../componenets/Education/Educarion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AboutMe /> },
      { path: "/education", element: <Educarion /> },
    ],
  },
]);

export default router;
