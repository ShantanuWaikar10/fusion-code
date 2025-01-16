import React from "react";
import IMG7 from "../assets/img7.avif";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_five = () => {
  return (
    <div className="gap-20 flex flex-col lg:flex-row min-h-[80vh] items-center">
      <div>
        <img
          className="object-fill h-[40vh] md:h-[50vh] lg:h-[70vh] min-w-[60vw]"
          src={IMG7}
          alt="img3"
        />
      </div>
      <div className="flex flex-col gap-5 px-10">
        <p className="font-semibold">The Athenaeum</p>
        <h1 className="text-3xl">Skin care protagonists: Vitamin C</h1>
        <p>
          This new year, wishes for revitalised energy take form in a curated
          collection of gifts for family and close companions. Receive
          complimentary red envelopes with purchases over HKD 900 by entering
          NY25 at checkout.
        </p>
        <div></div>

        <button
          type="button"
          className="min-w-full lg:min-w-[5vw] max-w-[57vw] flex justify-between text-gray-900 border border-gray-300 bg-transparent  hover:bg-black hover:text-white focus:ring-4  font-medium text-sm px-5 py-3 me-2 mb-2 "
        >
          Continue reading <IoIosArrowRoundForward size={25} />
        </button>
      </div>
    </div>
  );
};

export default Section_five;
