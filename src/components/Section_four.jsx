import React from "react";
import IMG4 from "../assets/img4.avif";
import IMG5 from "../assets/img5.avif";
import IMG6 from "../assets/img6.avif";

const Section_four = () => {
  return (
    <div className="flex gap-5 m-20 justify-center">
      <div className="flex flex-col items-center">
        <div>
          <img className="max-w-[50vw] max-h-[60vh]" src={IMG4} alt="" />
        </div>
        <p className="font-semibold hover:underline">
          Reverence Aromatique Hand Wash
        </p>
        <p className="mt-2">
          A gently exfoliating formulation
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img className="max-w-[50vw] max-h-[60vh]" src={IMG5} alt="" />
        </div>
        <p className="font-semibold hover:underline">
          Geranium Leaf Body Scrub
        </p>
        <p className="mt-2">
          Leaves skin feeling fresh, smooth and soft
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img className="max-w-[50vw] max-h-[60vh]" src={IMG6} alt="" />
        </div>
        <p className="font-semibold hover:underline">
          Screen 1
        </p>
        <p className="mt-2">A quartet of staples for the hands, body and home</p>
      </div>
    </div>
  );
};

export default Section_four;
