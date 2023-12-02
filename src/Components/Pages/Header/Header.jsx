import React, { useEffect, useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../../../shared/Button/PrimaryButton";
import logo from "../../../Assets/osicl.png";

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setNavbarVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = (
    <React.Fragment>
      <li className="font-semibold text-md text-slate-600 hover:text-primary active:text-primary">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#0067ED" : "",
              // color: isPending ? "" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-md text-slate-600 hover:text-primary active:text-primary">
        <NavLink
          to="/about-us"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#0067ED" : "",
              // color: isPending ? "" : "",
            };
          }}
        >
          About
        </NavLink>
      </li>
      <li className="font-semibold text-md text-slate-600 hover:text-primary active:text-primary">
        <NavLink
          to="/authorisation"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#0067ED" : "",
              // color: isPending ? "" : "",
            };
          }}
        >
          Authorisation
        </NavLink>
      </li>
      <li className="font-semibold text-md text-slate-600 hover:text-primary active:text-primary">
        <NavLink
          to="/services"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#0067ED" : "",
              // color: isPending ? "" : "",
            };
          }}
        >
         
        </NavLink>
      </li>
      <li className="font-semibold text-md text-slate-600 hover:text-primary active:text-primary">
        <NavLink
          to="/contact"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#0067ED" : "",
              // color: isPending ? "" : "",
            };
          }}
        >
          contact
        </NavLink>
      </li>
    </React.Fragment>
  );
  // const menuItems = (
  //   <React.Fragment>
  //     <li className="font-semibold text-md text-slate-600 hover:text-blue-500 active:text-blue-700">
  //       <NavLink to="/" style={({isActive, isPending})=>{
  //         return {
  //           color: isActive ? "#0067ED" : "",
  //           // color: isPending ? "" : "",
  //         }
  //       }}>Home</NavLink>
  //     </li>
  //     <li className="font-semibold text-md text-slate-600 hover:text-blue-500 active:text-blue-700">
  //     <NavLink to="/about-us" style={({isActive, isPending})=>{
  //         return {
  //           color: isActive ? "#0067ED" : "",
  //           // color: isPending ? "" : "",
  //         }
  //       }}>About</NavLink>
  //     </li>
  //     <li className="font-semibold text-md text-slate-600 hover:text-blue-500 active:text-blue-700">
  //       <Link to="/services">services</Link>
  //     </li>
  //     <li className="font-semibold text-md text-slate-600 hover:text-blue-500 active:text-blue-700">
  //       <Link to="/">All Product</Link>
  //     </li>

  //     <li className="font-semibold text-md text-slate-600 hover:text-blue-500 active:text-blue-700">
  //       <Link to="/blog">Blog</Link>
  //     </li>
  //     <li className="font-semibold text-md border-b-2 rounded border-blue-500 text-slate-600 hover:text-blue-500 active:text-blue-700">
  //       <Link to="/contact-us">Contact Us</Link>
  //     </li>

  //     <li></li>
  //   </React.Fragment>
  // );

  return (
    <header
      className={`w-full drop-shadow-sm z-50 sticky top-10 py-3 transition-all duration-300 ease-in-out ${
        isNavbarVisible ? " bg-white" : "bg-white drop-shadow-md"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto py-3">
        <div className="">
          <div className="">
            <div className="flex flex-wrap items-center justify-between px-3">
              <div>
                <Link to="/">
                  {/* <img
                    className="w-52 "
                    src={logo}
                    alt=""
                  /> */}
                  <p className="text-xl font-bold text-blue-600">OVERSEAS STUDY <span className="text-orange-500">& IMMIGRATION</span></p>
                  <p className=" text-gray-500">CONSULTANTS LTD</p>
                </Link>
              </div>

              <div className=" hidden md:block  text-center">
                <ul className="flex gap-8 capitalize font-semibold">
                  {menuItems}
                </ul>
              </div>

              <div className="hidden md:block">
                <div className="mt-4 sm:mt-0">
                  <Link to="/contact">
                    {" "}
                    <PrimaryButton>Get a quote</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2  focus:outline-none focus:ring-white"
              aria-expanded={isOpen}
            >
              {/* <span className="sr-only">Open main menu</span> */}
              <MdOutlineMenu
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              />

              <MdClose className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden overflow-hidden`}
      >
        <div className="px-4 transition duration-500 ">
          <ul className="flex flex-col gap-4 capitalize">{menuItems}</ul>
        </div>
        <div className=" border-y border-gray-300">
          {/* Add your call-to-action button for mobile here */}
          <div className="flex justify-start items-center px-4 ">
            <div className="mt-4 sm:mt-0">
              <button className="uppercase text-center py-4 px-12 text-white font-semibold bg-gradient-to-r from-[#2B59FF] to-[#0067ED] items-center hover:from-[#1a43d6] hover:to-[#9b22d3] border-0 focus:outline-none hover:bg-gray-200 rounded md:mt-0">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
