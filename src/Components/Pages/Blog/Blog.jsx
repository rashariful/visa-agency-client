import blogData from "../../../assets/data/blog.json";
import { Link } from "react-router-dom";
const Blog = () => {
 

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="relative mb-20">
        <img
          src="https://www.iecc.co.uk/public/frontend/images/banner/banner2.jpg"
          alt="Top "
          className="w-full object-cover h-96"
        />
        <h3 className="absolute font-myFont inset-0 drop-shadow flex items-center justify-center text-slate-50 font-bold text-4xl ">
          Blog
        </h3>
        <div className="text-sm ml-32 absolute text-white bottom-5 breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="text-primary">Blog</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Blog
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {blogData.map((blog, index) => (

            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border bg-white"
            >
              <Link
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src={blog.imgUrl}
                  loading="lazy"
                  alt={blog.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <p
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    {blog.title}
                  </p>
                </h2>

                <p className="mb-8 text-gray-500">
                 {blog.description}
                </p>

                <Link 
                to={``}
                className="text-primary hover:underline" 
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
