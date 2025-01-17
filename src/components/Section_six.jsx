import React from "react";
import IMG8 from "../assets/img8.avif";
import IMG9 from "../assets/img9.avif";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_six = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 m-20">
      <div className="hidden md:block">
        <p className="font-semibold">For cool climates</p>
        <h1 className="text-3xl mt-3">Adjusting to seasonal change</h1>
        <p className="mt-3">
          In the cooler months, water loss from the skin is increased due to low
          humidity and wind exposure. Select skin care formulations that assist
          in protecting its delicate surface.
        </p>
      </div>
      <div className="lg:flex flex-col items-center hidden">
        <div className="max-w-[55vw]">
          <img src={IMG8} alt="" />
        </div>
        <p className="font-semibold hover:underline">
          Parsley Seed Anti-Oxidant Intense Serum
        </p>
        <p className="mt-2">A hydrating serum to bolster skin</p>
      </div>
      <div className="flex flex-col items-center justify-end">
        <div className="max-w-[55vw]">
          <img src={IMG9} alt="" />
        </div>
        <p className="font-semibold hover:underline">
          Camellia Nut Facial Hydrating Cream
        </p>
        <p className="mt-2">For normal, dry or sensitive skin</p>
      </div>
    </div>
  );
};

export default Section_six;
