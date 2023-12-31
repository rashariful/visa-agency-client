import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-32 -z-50">
      <div className="relative mb-20">
        <img
          src="https://www.iecc.co.uk/public/frontend/images/banner/banner2.jpg"
          alt="Top "
          className="w-full object-cover h-96"
        />
        <h3 className="absolute font-myFont inset-0 drop-shadow flex items-center justify-center text-slate-50 font-bold text-4xl ">
          Contact us
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="text-primary">Contact</li>
          </ul>
        </div>
      </div>
      {/* contact info here */}
      <div className="contact-bg">
        <div className="container mx-auto flex">
          <div className="left-con">
            <h2 className="text-4xl font-semibold mb-10 leading-normal text-slate-700">
              Need additional information?
            </h2>
            <p className="mb-10 w-1/2 text-neutral">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>

            <span className="flex gap-3 mb-3">
              <span className="text-primary">
                {" "}
                <FaPhoneAlt size={19} />
              </span>

              <p className="font-semibold text-neutral"> +8801701848076</p>
            </span>
            <span className="flex gap-3 mb-3">
              <span className="text-primary">
                <FaEnvelope size={19} />
              </span>

              <p className="font-semibold text-neutral">
                Rashidulhasan@osicl.com
              </p>
            </span>
            <span className="flex gap-3 mb-3">
              <span className="text-primary">
                {" "}
                <FaLocationArrow size={19} />
              </span>

              <p className="font-semibold text-neutral">
                218,Sahera Tropical Centre,3rd Floor,Suite-33,Elephant Road{" "}
                <br /> <span>Dhaka Bangladesh 1205</span>{" "}
              </p>
            </span>
          </div>

          <div className="right-con">
            <form>
              <label>
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                placeholder='EG: "Sam OJeyinka"'
              />
              <br />
              <br />

              <label>
                Email <span className="text-rose-600">*</span>
              </label>
              <input
                className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                type="email"
                placeholder="youremail@example.com"
              />
              <br />
              <br />
              <label>
                Message <span className="text-rose-600">*</span>
              </label>

              <textarea
                className="border w-full p-2 border-slate-400 rounded-md outline-primary transition duration-75"
                placeholder="Write here.."
              ></textarea>
              <button className="btn mt-5 text-slate-50 bg-primary border-none w-full hover:bg-[#0067ede6]">
                <FaEnvelopeOpenText className="mr-5" /> Send message
              </button>
              {/* <PrimaryButton className="w-full bg-[#FF4C30]">
              <FaEnvelopeOpenText className="mr-5" /> Send message
              </PrimaryButton> */}
            </form>
          </div>
        </div>
      </div>
      {/* google map showing here */}
      <div className="mt-8">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116758.84429982356!2d90.29876122714833!3d23.864291619452565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b984b4b79dc5%3A0x87cf1d49ddf734bc!2sOSICL!5e0!3m2!1sen!2sbd!4v1701019283104!5m2!1sen!2sbd"
          className="w-full h-full"
          style={{ border: 0, height: "350px" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
