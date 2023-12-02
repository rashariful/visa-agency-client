import img1 from "../../../assets/over.PNG"
import img2 from "../../../assets/oversis.PNG"

const Authorisation = () => {
    return (
        <div>
            <h1 className="text-4xl text-center  my-10">Authorisation</h1>
            <div className="flex mx-auto w-full flex-col gap-8 flex-wrap">
            <img className="w-1/2 h-auto mx-auto object-contain" src={img1} alt="" />
            <img className="w-1/2 h-auto mx-auto object-contain" src={img2} alt="" />
            </div>
        </div>
    );
};

export default Authorisation;