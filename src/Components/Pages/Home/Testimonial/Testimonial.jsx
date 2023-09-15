import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, 
        }}
       
        modules={[Autoplay,]}
        className="mySwiper grid gap-4 md:grid-cols-2 md:gap-8"
      >
        <div 
        className=""
        >
          <SwiperSlide className="flex justify-center gap-4">
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}
          </SwiperSlide>
          <SwiperSlide className="flex justify-center gap-4">
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}
          </SwiperSlide>

      
          {/* <SwiperSlide>
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">
                “This is a section of some simple filler text, <br /> also known
                as placeholder text.”
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt=" by Radu Florin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-primary text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </div>
      </Swiper>
    </>
  );
};
export default Testimonial;
