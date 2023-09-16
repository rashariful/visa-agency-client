import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// eslint-disable-next-line no-unused-vars
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import PrimaryButton from "../../../../shared/Button/PrimaryButton";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      title: "We Provide all Visa You Need",
      description:
        "Our experienced team of consultants is dedicated to simplifying the immigration process, ensuring a stress-free journey for you and your loved ones.",
      img: "https://templatekit.jegtheme.com/vizago/wp-content/uploads/sites/401/2023/08/image-hero.png",
    },
    {
      id: 2,
      title: " Your Best Guide To Study Abroad",
      description:
        "Our experienced team of consultants is dedicated to simplifying the immigration process, ensuring a stress-free journey for you and your loved ones.",
      img: "https://img.freepik.com/free-vector/hand-drawn-study-abroad-illustration_23-2150314526.jpg?w=826&t=st=1694859873~exp=1694860473~hmac=e370fb766a2dce05e2e6849d39578f896974ac7b92cbbc0a5af77e9da06b4c1e",
    },
    {
      id: 3,
      title: " We Provide all Visa You Need",
      description:
        "Our experienced team of consultants is dedicated to simplifying the immigration process, ensuring a stress-free journey for you and your loved ones.",
      img: "https://img.freepik.com/premium-vector/immigration-template-hand-drawn-cartoon-flat-illustration-document-with-visa-passport_2175-7960.jpg?w=1380",
    },
  ];
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <div className="">
          {heroData.map((hero, index) => (
            <SwiperSlide key={index} className="h-[650px]">
              <div className="bg-slate-50 pb-6 sm:pt-8 lg:pt-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                  <section className="flex flex-col items-center justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                    {/* <!-- content - start --> */}
                    <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                      <h1 className="mb-8 text-2xl font-bold text-slate-700 md:text-5xl leading-10">
                        {hero.title}
                      </h1>

                      <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                        {hero.description}
                      </p>

                      {/* <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                          Contact us
                        </button> */}
                        <Link to="/contact">
                      <PrimaryButton>contact us</PrimaryButton>
                        </Link>
                    </div>
                    {/* <!-- content - end --> */}

                    {/* <!-- image - start --> */}
                    <div className="h-48 overflow-hidden lg:h-auto xl:w-5/12">
                      <img
                        src={hero.img}
                        loading="lazy"
                        alt="Photo by Fakurian Design"
                        className=" object-center rounded object-contain"
                      />
                    </div>
                    {/* <!-- image - end --> */}
                  </section>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default Hero;
