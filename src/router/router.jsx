import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/page.jsx";
import About from "../pages/about/page.jsx";
import Services from "../pages/services/Page.jsx";
import Project from "../pages/project/page.jsx";
import Blogs from "../pages/blog/page.jsx";
import Contact from "../pages/contact/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> }, // You can rename to actual 'Pages' component if available
      { path: "services", element: <Services /> },
      { path: "project", element: <Project /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;