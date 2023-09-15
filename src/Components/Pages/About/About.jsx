import { Link } from "react-router-dom";
// import Team from "../Team/Team";

// import "../../../../styles/AboutCompStyles.css";
// import {car,carout,carshop,worker} from '../../../../assets/AboutCompImages';

const About = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/urban-skyline-from-new-york-city-manhattan_649448-1225.jpg?w=1380&t=st=1694721842~exp=1694722442~hmac=02f8d1c1a2bc92932803e9e1a7e9b87d0bbdbe6cda46dcf50ee8ecbb63e802db"
          alt="Top "
          className="w-full object-cover h-96"
        />
        <h3 className="absolute inset-0 drop-shadow shadow flex items-center justify-center text-white font-bold text-4xl ">
          About US
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="text-primary">About</li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
            Our competitive advantage
          </h1>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
            The important factor when using filler text is that the text looks
            realistic otherwise it will not look very good.
            <br />
            <br />
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is{" "}
            <a
              href="#"
              className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              random
            </a>{" "}
            or otherwise generated. It may be used to display a sample of fonts
            or generate text for testing. Filler text is dummy text which has no
            meaning however looks very similar to real text.
          </p>

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
            About us
          </h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>

          <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>

          <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
            “This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.”
          </blockquote>

          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img
              src="https://img.freepik.com/free-photo/toronto-skyline-from-park_649448-3488.jpg?w=1380&t=st=1694721473~exp=1694722073~hmac=4c156fcefd502660f93bfa5a44404993295eac46da442b0ba2932da63a7f8af7"
              loading="lazy"
              alt=" by Minh Pham"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
            Features
          </h2>

          <p className="text-gray-500 sm:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>
        </div>
      </div>
      {/* <Team/> */}
    </div>
  );
};

export default About;