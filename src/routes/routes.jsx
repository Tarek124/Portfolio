import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutMe from "../componenets/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <AboutMe /> }],
  },
]);

export default router;
