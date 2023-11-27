import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const University = () => {
  const universityData = [
    {
      id: 1,
      title: " The University of Arizona",
      img: "https://img.freepik.com/premium-photo/cathedral-ordination-monastery_433016-4215.jpg",
      link: "link"
    },
    {
      id: 2,
      title: " The University of Arizona",
      img: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?w=1380&t=st=1700929680~exp=1700930280~hmac=4bc4ccc4a70733c02edcbcc56842b217a8cc623f1193c6b887869eacd2740941",
      link: "link"
    },
    {
      id: 3,
      title: " The University of Arizona",
      img: "https://img.freepik.com/free-photo/mevlana-mosque-konya-turkey_335224-631.jpg?w=1380&t=st=1700929837~exp=1700930437~hmac=724088a12e72ea642e5a2ed8a4736ad9ceecd66e4c10b5a2bac0919ade0007af",
      link: "link"
    },
    {
      id: 4,
      title: " The University of Arizona",
      img: "https://img.freepik.com/premium-photo/church-archangel-michael_433016-4399.jpg",
      link: "link"
    },
    {
      id: 5,
      title: " The University of Arizona",
      img: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?w=1380&t=st=1700929680~exp=1700930280~hmac=4bc4ccc4a70733c02edcbcc56842b217a8cc623f1193c6b887869eacd2740941",
      link: "link"
    },
    {
      id: 6,
      title: " The University of Arizona",
      img: "https://img.freepik.com/free-photo/beautiful-streets-switzerland_8353-9666.jpg?w=1380&t=st=1700929795~exp=1700930395~hmac=3858268cdf4e1c214165159c97d4db03ef112e8a869fce8dc0693d3f7ed09ca5",
      link: "link"
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
    return (
        <div className="bg-slate-700">
        <section className="container mx-auto px-3 py-24">
          <h3 className="sm:text-3xl text-slate-50 text-2xl capitalize font-medium title-font text-center mb-10">
            Popular universities
          </h3>
          <div 
          // className="grid gap-4 grid-cols md:grid-cols-3 lg:grid-cols-5"
          >
            <div>
            <Carousel
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            >
            {
              universityData.map((university, index)=>(
                <div key={index}
                 className="hover:-translate-y-3 ml-3 border border-slate-200 transition-all duration-500 rounded-lg"
                 >
                <img 
                className="rounded-t-md"
                src={university.img}
                 alt="" 
                 />
                <h3 className=" font-semibold py-3 px-2 bg-white rounded-b-md text-slate-700 pt-4">
                 {university.title}
                </h3>
              </div>
              ))
            }
            </Carousel>

            </div>
          </div>
        </section>
      </div>
    );
};

export default University;