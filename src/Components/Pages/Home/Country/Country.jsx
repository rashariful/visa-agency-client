import  { useState } from "react";
import CountryList from "./CountryList";
import bg from "../../../../assets/bg-01-01.png";

const Country = () => {
  const [activeTab, setActiveTab] = useState(0);
  const taps = [
    {
      id: 1,
      title: "canada",
      img: "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f1e8-1f1e6.jpg",
      content: <CountryList />,
    },
    {
      id: 2,
      title: "australia",
      img: "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg",
      content: "Business description",
    },
    {
      id: 3,
      title: "united kingdom",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      content: <CountryList />,
    },
    {
      id: 4,
      title: "germany",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      content: "Hospitality description",
    },
    {
      id: 5,
      title: "USA",
      img: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
      content: <CountryList />,
    },
    {
      id: 6,
      title: "singapore",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
      content: "singapore description",
    },
  ];
  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section
      className=" bg-no-repeat  bg-cover bg-center bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* <img src={bg} alt="" /> */}
      <div className="">
        <div className="container mx-auto px-8 py-32 ">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 capitalize text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Immigration - Choose your country!
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Fusce venenatis lectus non est congueitae malesuada neque lacinia.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center mt-16  bg-white py-3 ">
            <div className="flex flex-wrap justify-center items-center drop-shadow-sm border-b-2 gap-6">
              {taps.map((tab, index) => (
                <div
                  key={index}
                  className={` ${
                    activeTab === index
                      ? "border-b-2  border-primary transition duration-300 text-primary"
                      : " text-slate-700"
                  }`}
                  onClick={() => handleTab(index)}
                >
                  <div className="">
                    <ul
                      className={`mb-4 flex flex-wrap gap-2 duration-300 items-center
                
              `}
                    >
                      <li className="hidden md:block">
                        <img
                          className="w-5 h-5 rounded-full border"
                          src={tab.img}
                          alt=""
                        />
                      </li>
                      <li
                        className={`capitalize cursor-pointer leading-normal`}
                      >
                        {tab.title}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-20">{taps[activeTab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default Country;
