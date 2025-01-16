import React from "react";
import IMG1 from "../assets/img1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";


const Section_one = () => {
  return (
    <div className="gap-20 flex flex-col-reverse lg:flex-row min-h-[80vh] items-center bg-pink-50">
      <div>
        <h1 className="text-4xl pl-10 pb-56 hidden md:block">Aesop.</h1>
      </div>
      <div className="flex flex-col items-center md:items-start p-4 gap-5">
        <h1 className="text-3xl">Resurgent beginnings</h1>
        <p>
          This new year, wishes for revitalised energy take form in a curated
          collection of gifts for family and close companions. Receive
          complimentary red envelopes with purchases over HKD 900 by entering
          NY25 at checkout.
        </p>
        <div>
          
        </div>
        <button
          type="button"
          className="min-w-full md:min-w-[5vw] max-w-[57vw] flex justify-between text-gray-900 border border-gray-300 bg-transparent  hover:bg-black hover:text-white focus:ring-4  font-medium text-sm px-5 py-3 me-2 mb-2 "
        >
          Explore seasonal gift{" "}
          <IoIosArrowRoundForward size={25}/>
        </button>
      </div>
      <div>
        <img className="object-fill h-[50vh] md:h-[70vh] lg:h-[90vh] min-w-[50vw]" src={IMG1} alt="img1" />
      </div>
    </div>
  );
};

export default Section_one;
