import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import Services from "../Components/Pages/Services/Services";
import ServiceDetails from "../Components/Pages/Services/ServiceDetails";
import CountryDetails from "../Components/Pages/Home/Country/CountryDetails";
import Authorisation from "../Components/Pages/Authorisation/Authorisation";

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
          path: "/authorisation",
          element: <Authorisation/>,
        },
        {
          path: "/service-details/:id",
          element: <ServiceDetails/>,
        },
        {
          path: "/country-details/:id",
          element: <CountryDetails/>,
        },


      ],
    },
   
  ]);
  
  
  export default router