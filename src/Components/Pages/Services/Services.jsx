import React from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

const Services = () => {
    const servicesData = [
        {
          id: 1,
          title: "Education Visa",
          subTitle: "Simplify complexity and enhance user interactions with our",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 2,
          title: "Business immigration",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 3,
          title: "skilled immigration",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 4,
          title: "spouse/family visas",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 5,
          title: "tourist & visitor visas",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 6,
          title: "resident return visas",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 7,
          title: "resident return visas",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
        {
          id: 8,
          title: "resident return visas",
          subTitle: "sub title",
          img: <FcHome/>,
          link: "service link",
        },
      ];
  return (
    <section className="">
      {/* <div className="relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
            <img
            //   src={services}
              alt="Top "
              className="w-full object-cover h-96 bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </div>
          <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl ">
            Services
          </h3>
          <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className='text-primary'>services</li>
            </ul>
          </div>
        </div> */}
      <div className="container mx-auto px-8 py-32">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 capitalize text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
             what we do
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We Provide Experts Create Great Value For Visa Categories.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {servicesData.map((service, index) => (
            <Link
            to={`/service-details/${service.id}`}

              key={index}
              className="border rounded-md p-5 hover:border-blue-500 duration-300 transition-all hover:scale-105"
            >
              {/* <img src={sv3} alt="" className="w-20 h-20" /> */}
              <span className="text-2xl bg-rose-100">{service.img}</span>
              <p className="text-lg capitalize font-bold text-gray-700 mt-5">
                {service.title}
              </p>
              <p className="mt-3 text-gray-500">{service.subTitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
