import React from "react";
import IMG2 from "../assets/img2.avif";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_two = () => {
  return (
    <div className="flex gap-5 m-20">
      <div>
        <p className="font-semibold">Skin Care+</p>
        <h1 className="text-3xl mt-3">Intensive formulations for complex skin</h1>
        <p className="mt-3">
          Explore products formulated with mature skin and urban dwellers in
          mind, to provide daily hydration and the additional benefit of potent
          vitamins and anti-oxidants.
        </p>
        <button
                  type="button"
                  className="max-w-[17vw] flex justify-between text-gray-900 bg-transparent font-normal text-sm mt-8 py-3 me-2 mb-2 "
                >
                  Browse formulations{" "}
                  <IoIosArrowRoundForward size={25}/>
                </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-[50vw]">
            <img src={IMG2} alt="" />
        </div>
        <p className="font-semibold hover:underline">Brilliant Performers Duo</p>
        <p className="mt-2">Synchronised support to refine and replenishthe skin</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-[50vw]">
            <img src={IMG2} alt="" />
        </div>
        <p className="font-semibold hover:underline">Lucent Facial Concentrate</p>
        <p className="mt-2">A Vitamin C-rich layering serum</p>
      </div>
    </div>
  );
};

export default Section_two;
