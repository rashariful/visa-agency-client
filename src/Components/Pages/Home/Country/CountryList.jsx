import { Link } from "react-router-dom";

const CountryList = () => {
    const countryData = [
        {
            id: 1,
            title: "Student Visa",
            subTitle: "sub title",
            description: "Studying In The canada The generom repetition jected humour, or non-characteristic words etc.",
            img: "https://preview.easetemplate.com/visapress/assets/images/visa-img-1.jpg"
        },
        {
            id: 2,
            title: "Business Visa",
            subTitle: "sub title",
            description: "Quam semper simple dummy eleifend lorem in imperdiet mauris estibulum et efficitur lorem ipsum.",
            img: "https://preview.easetemplate.com/visapress/assets/images/visa-img-2.jpg"
        },
        {
            id: 3,
            title: "Job Seeker Visa",
            subTitle: "sub title",
            description: "Studying In The canada The generom repetition jected humour, or non-characteristic words etc.",
            img: "https://img.freepik.com/free-photo/medium-shot-smiley-couple-with-documents_23-2149272139.jpg?w=1380&t=st=1694631366~exp=1694631966~hmac=12a494a5df40f8cff64f1bf75c8bc572f5869416de6ddc1f4813d9c7f0b3863b"
        },
        {
            id: 4,
            title: "Tourist & Visitor Visa",
            subTitle: "sub title",
            description: "Studying In The canada The generom repetition jected humour, or non-characteristic words etc.",
            img: "https://img.freepik.com/free-photo/high-angle-woman-working-as-travel-agent_23-2150455568.jpg?w=1380&t=st=1694631669~exp=1694632269~hmac=212c55e43cc73e02c13411a20405790ba7b7d231312e0cf1a39e275fb1e875aa"
        },
    ]
  return (
    <div className="bg-white shadow-2xl rounded-b-lg py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {/* <!-- article - start --> */}
          {
            countryData.map((country, index)=>(
                <div 
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border bg-white hover:scale-105 duration-500">
                <Link
                  className="group relative block h-48 overflow-hidden bg-gray-800 md:h-64"
                >
                  <img
                    src={country.img}
                    loading="lazy"
                    alt={country.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>
    
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h2 className="mb-2 text-lg font-semibold text-gray-50">
                    <a
                      href="#"
                      className="transition duration-300 hover:text-primary"
                    >
                      {country.title}
                    </a>
                  </h2>
    
                  <p className="mb-8 text-gray-500">
                  {country.description}
                  </p>
    
                 <div>
                 </div>
                </div>
                  <Link
                    className="text-primary font-semibold p-5"
                    >
                      Read more
                    </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CountryList;
