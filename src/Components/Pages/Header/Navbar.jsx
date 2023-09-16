import React, { useState, useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {

  return (
    <nav
      className="sticky top-0 z-30"
    >
      <div className=" bg-slate-800 py-2 px-6 overflow-x-hidden">
      <div className="flex flex-wrap flex-col gap-3 justify-between md:flex-row items-center">
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex flex-wrap items-center gap-3">

            <span className="text-slate-400 hover:text-primary transition-colors duration-300">
              <FaPhoneSquare size={18} />
            </span>
           
              <a className="text-slate-400" href="tel:+8801850273117">
                +8801733-578698
              </a>
           
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 hover:text-primary transition-colors duration-300">
              <MdEmail size={18} />
            </span>

            <span className="">
              <span className="text-slate-400 font-extralight">yourmail@gmail.com</span>
            </span>
          </div>
        </div>

        {/* social media start */}
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <a
              href="https://www.facebook.com/Digitalagencypark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
            >
              <FaFacebookSquare size={18} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/Digitalagencypark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
            >
              <FaInstagramSquare size={18} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/Digitalagencypark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;