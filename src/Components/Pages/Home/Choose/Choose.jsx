import ProgressBar from "./ProgressBar";
// eslint-disable-next-line no-unused-vars
import style from "./style.css";

const Choose = () => {
  return (
    <section className="">
      <div className="container mx-auto px-8 py-32">
        {/* <div className="mb-10 md:mb-16">
            <h2 className="mb-4 capitalize text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
               what we do
            </h2>
  
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              We Provide Experts Create Great Value For Visa Categories.
            </p>
          </div> */}

        <div className=" flex gap-10 items-center">
          <div>
            <h3 className="text-primary font-semibold">WHY CHOOSE US</h3>
            <p className="text-slate-700 text-4xl leading-normal mb-8">
              Experienced Lawyers Provide Immigration Services.
            </p>
            <p className="text-slate-500 leading-normal mb-8">
              The Most Eminent Visas and Immigration Consultant service
              provider. <br /> Branches in India and overseas.
            </p>
            <div>
              <div className="relative pt-1">
                <div className="flex flex-col space-y-4">
                  <ProgressBar
                    initialValue={20}
                    increment={10}
                    endValue={80}
                    label="Business Immigration Visa"
                  />
                  <ProgressBar
                    initialValue={40}
                    increment={10}
                    endValue={90}
                    label="Visitor Visa"
                  />
                  <ProgressBar
                    initialValue={10}
                    increment={10}
                    endValue={50}
                    label="Student Visa"
                  />
                </div>
              </div>
            </div>
            <p className="text-slate-500 leading-normal mt-8 w-96">
              Foundation was established with a small idea that was incepted in
              the minds of its promoters in the year 1994! We skillfully guide
              applicants for their immigration process to any country they
              aspire to settle. <span className="text-primary hover:underline">Read more</span>
            </p>
          </div>
          <div>
            <img
              className="cartoon"
              src="https://tripzia.cymolthemes.com/app-landing/wp-content/uploads/sites/6/2021/02/single-img1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
