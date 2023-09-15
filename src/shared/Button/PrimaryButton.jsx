/* eslint-disable react/prop-types */

const PrimaryButton = ({ children, onClick }) => {
    return (
      // <button 
      // className="px-4 py-2 bg-primary text-white drop-shadow-sm rounded hover:bg-hover transition duration-200"
      // onClick={onClick}
      // >
      //   {children}
      // </button>
       <button className="uppercase text-center px-4 py-2 text-white font-semibold bg-gradient-to-r from-secondary to-primary items-center hover:from-primary hover:to-secondary border-0 focus:outline-none hover:bg-gray-200 transition duration-500 rounded md:mt-0">
      {children}
     </button>
    );
  };

export default PrimaryButton;