
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";


const teams = [
  {
    id: 1,
    name: "Mr jhn",
    titiel: "Digital Marketer",
    fbUrl: "https://www.facebook.com/rashariful",
    linkUrl: "https://www.facebook.com/rashariful",
    twtUrl: "https://www.facebook.com/rashariful",
    img: 'https://img.freepik.com/free-photo/face-handsome-african-american-business-woman-holding-tablet-background-business-peoples-multiracial-team-meeting-sitting-office-table_627829-13639.jpg?w=740&t=st=1694769660~exp=1694770260~hmac=0528fa00a6f310db1641c82d1153dfa92b426d8330c127d34d46ff3b16865985',
  },
  {
    id: 2,
    name: "Md shariful Islam",
    titiel: "Founder / CEO",
    fbUrl: "https://www.facebook.com/rashariful",
    linkUrl: "https://www.facebook.com/rashariful",
    twtUrl: "https://www.facebook.com/rashariful",
    img: 'https://img.freepik.com/free-photo/entrepreneur-typing-keyboard-working-from-home-person-using-computer-remote-corporate-work-browsing-internet-businessman-doing-networking-project-with-technology_482257-29002.jpg?w=740&t=st=1694769639~exp=1694770239~hmac=bafd71f4dbef7ad7cac21c61d4f2302cb66b24fca93296f28082da4256cafb02',
  },
  {
    id: 3,
    name: "Md Ismail hossain",
    titiel: "Web developer",
    fbUrl: "https://www.facebook.com/rashariful",
    linkUrl: "https://www.facebook.com/rashariful",
    twtUrl: "https://www.facebook.com/rashariful",
    img: 'https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=740&t=st=1694769587~exp=1694770187~hmac=2acc305a041ddcc4a87b45f57c5edf077de28dec9c2116ab0ae937eca79a8c2b',
  },
  {
    id: 4,
    name: "Md Rashidul hasan",
    titiel: "Graphic design",
    fbUrl: "https://www.facebook.com/rashariful",
    linkUrl: "https://www.facebook.com/rashariful",
    twtUrl: "https://www.facebook.com/rashariful",
    img: 'https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?w=740&t=st=1694767234~exp=1694767834~hmac=7f8e3a47ca4c4b3a35f268c7f6298d0324dcb666035da8eb968d1566ebd2fc54',
  },
];

const Team = () => {
  return (
    <div>
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-700 capitalize text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Meet our Team
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8"
              >
                <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                  <img
                    src={team.img}
                    loading="lazy"
                    alt="by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-primary md:text-lg font-bold text-center">
                    {team.name}
                  </div>
                  <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                    {team.titiel}
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href={team.fbUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                        rel="noreferrer"
                      >
                        <FaFacebookSquare size={22} />
                      </a>
                      <a
                        href={team.linkUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                        rel="noreferrer"
                      >
                        <FaLinkedin size={22} />
                      </a>
                      <a
                        href={team.twtUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                        rel="noreferrer"
                      >
                        <FaTwitterSquare size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
