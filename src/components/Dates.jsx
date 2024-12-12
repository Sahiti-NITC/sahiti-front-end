import React from "react";
import Button from "./Common/BiggerButton";
import { Link } from "react-router";
import Divider2 from "./Common/Divider2";
const Dates = () => {
  return (
    <div className="flex flex-col items-center w-full relative h-full mt-[100px]">
      {/* Add relative here */}
      <div className="flex flex-col h-max justify-center items-center w-full px-4 md:px-8 lg:px-16 ipadPro:my-[6vh]">
        {/* Header Text */}
        <h3 className="font-caslon md:text-6xl text-3xl  text-[#FFEFD5] text-center leading-none">
          NIT CALICUT'S OWN
        </h3>
        <h3 className="font-caslon md:text-6xl text-3xl  text-[#FFEFD5] text-center leading-none">
          LITERATURE FEST
        </h3>
        {/* Book Image */}
        <img
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto mt-6"
          src="/illustrations/book.png"
          alt="Sahiti Debate"
        />
        {/* Date Text */}
        <h3 className="font-caslon md:text-6xl text-3xl text-[#FFEFD5] mt-[3vh] lg:mt-0 text-center leading-none">
          11TH AND 12TH JANUARY, 2025
        </h3>

        <div className="flex flex-col justify-center items-center mt-6 mb-[13vh] lg:mb-[20vh] z-[10]">
          <Link
            link="https://www.instagram.com/sahiti_nitc/"
            className='md:mt-0 mt-12 border-[#feefd7] border-[2px] p-3 px-12 rounded-full text-2xl text-[#feefd7] hover:bg-[#feefd7] hover:text-[#FF8343] hover:border-[#FF8343] '
          >
            @sahiti_nitc
          </Link>
        </div>
      </div>


      {/* Illustration Section */}
      <div className="w-full absolute right-0 bottom-1">
        <img
          src="/illustrations/datesIllustration-Desktop.svg"
          alt="Illustration"
          className="w-full"
        />
      </div>
      <img src="/illustrations/divider2.svg" alt="Divider" className="h-[40px] absolute bottom-0 "/>

        
    </div>
  );
};

export default Dates;
