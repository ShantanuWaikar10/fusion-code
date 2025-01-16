import React from "react";
import IMG3 from "../assets/img3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_three = () => {
  return (
    <div className="gap-20 flex min-h-[80vh] items-center">
      <div className="flex flex-col gap-5 pl-10">
      <p className="font-semibold">Festive giving</p>
        <h1 className="text-3xl">Resurgent beginnings</h1>
        <p>
          This new year, wishes for revitalised energy take form in a curated
          collection of gifts for family and close companions. Receive
          complimentary red envelopes with purchases over HKD 900 by entering
          NY25 at checkout.
        </p>
        <div></div>
        <button
          type="button"
          className="max-w-[17vw] flex justify-between text-gray-900 border border-gray-300 bg-transparent  hover:bg-black hover:text-white focus:ring-4  font-medium text-sm px-5 py-3 me-2 mb-2 "
        >
          Explore seasonal gift <IoIosArrowRoundForward size={25} />
        </button>
      </div>
      <div>
        <img
          className="object-fill h-[70vh] min-w-[60vw]"
          src={IMG3}
          alt="img3"
        />
      </div>
    </div>
  );
};

export default Section_three;
