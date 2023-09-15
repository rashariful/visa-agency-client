import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import Services from "../Components/Pages/Services/Services";
import ServiceDetails from "../Components/Pages/Services/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/about-us",
          element: <About/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/services",
          element: <Services/>,
        },
        {
          path: "/service-details/:id",
          element: <ServiceDetails/>,
        },


      ],
    },
   
  ]);
  
  
  export default router