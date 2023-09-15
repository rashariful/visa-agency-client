import Services from "../Services/Services";
import Choose from "./Choose/Choose";
import Country from "./Country/Country";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";
import Story from "./Story/Story";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import University from "./University/University";
import VisaType from "./VisaType/VisaType";
import WorkingWay from "./WorkingWay/WorkingWay";


const Home = () => {
    return (
        <main>
            <section> <Hero/> </section>
            <section> <Services/> </section>
            {/* <section> <VisaType/> </section> */}
            <section> <Country/> </section>
            <section> <University/> </section>
            <section> <WorkingWay/> </section>
            <section> <FAQ/> </section>
            <section> <Team/> </section>
            <section> <Story/> </section>
            <section> <Choose/> </section>
            <section> <Testimonial/> </section>
        </main>
    );
};

export default Home;