import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/home/page.jsx"
import About from "../pages/about/page.jsx"
import Contact from "../pages/contact/page.jsx"
import Project from "../pages/project/page.jsx"


const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true,element:<Home/>},
            {path:'about',element:<About/>},
            {path:'contact',element:<Contact/>},
            {path:'project',element:<Project/>},
          
        ]
    }
])

export default router