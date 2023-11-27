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
            About OSICL
          </h1>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Learn about the institutes we offer. Research on the internet to see
            which is best suited to your needs. Students should try to find out
            about the university, teaching and facilities, cost, payment terms,
            terms and conditions, refund policy, entry requirements, type and
            duration of visa, whether work is allowed, location, cost of living
            and job opportunities, post study work opportunities, PR
            opportunities before committing themselves.The terms of conditions
            of enrolment is very essential and tells you about what you can do
            and what you cannot do as well as refund policies. <br />
            <br />Compliance is key
            and you should first satisfy the entry requirements of an institute
            and also be certain that yoiu meet the visa requirements. We do not
            offer short cuts and do not waive any conditions. You will need to
            satisfy all the entry conditions if you wish to apply and be
            successful for a visa. <br />
            <br /> Submit an application: We will need a signed
            application form, copies of education certificates, IELTS, passport.
            If you have any study gaps, we need to know what you have been doing
            and why the gaps had occurred. We will revert back with an offer and
            invoice. If you downloading the application forms from our library,
            your education certificates will need to be attested by us. So you
            will need to show them physically. In this regard there are no
            charges whatsoever, but we will need to be satisfied that you
            genuinely intend to study, can afford the tuition fees and that you
            can meet the visa requirements. <br />
            <br />Pay your advance tuition fees: Never
            pay cash to an agent. We ask you to secure a student file and to pay
            via your bank to the university bank. Advance tuition fees are
            essential before a visa because we need to be certain that you
            committed to your aims and that you will study. Advnace tuition fees
            are refundable by the institute. some institutes deduct an admin
            fee. So please read the terms and of enrolment before you submit
            your application. We will issue a CAS/COE/I20/Final Acceptance
            letter so that you can submit a visa application. <br />
            <br /> We will advise
            about visa requirements, duration of a visa and permission to work
            as well as the amount you need to show in a bank account and which
            banks are approved etc. Visa applications can take time - some
            countries take longer than others. You should apply for a visa well
            and advance and therefore should start your reaserch much earlier.
            In many countries, you will be required to resubmit your visa
            application and financial documents and a new acceptance letter if
            you miss the deadline and are forced to defer your course
            commencement. In such cases you will also need to pay the visa fee
            again. This is why it is imperative that you apply early. So that
            you do not need to resubmit your visa application. <br />
            <br /> After you have
            obtained a visa we will advise of what documents you need to take to
            your desired destination and how to register at the university. 
            <br />
            <br />
            
            <i className="text-rose-700">It
            is very simple. We will help you every step of the way if you
            genuinely want to study. You should apply as early as possible.</i>
            
          </p>

         
        </div>
      </div>
      {/* <Team/> */}
    </div>
  );
};

export default About;
