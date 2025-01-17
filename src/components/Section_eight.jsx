import React from "react";
import IMG10 from "../assets/img10.avif";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_eight = () => {
  return (
    <div className="gap-20 flex flex-col lg:flex-row min-h-[80vh] items-center">
      <div>
        <img
          className="object-fill h-[40vh] md:h-[50vh] lg:h-[70vh] min-w-[60vw]"
          src={IMG10}
          alt="img3"
        />
      </div>
      <div className="flex flex-col gap-5 px-10">
        <p className="font-semibold">Tokens of appreciation</p>
        <h1 className="text-3xl">Corporate gifts</h1>
        <p>
          Find a variety of gift-giving options, ideal for honouring treasured
          colleagues and clients. Trained consultants will be pleased to guide
          your selections and assist with delivery.
        </p>
        <div></div>

        <button
          type="button"
          className="min-w-full lg:min-w-[5vw] max-w-[57vw] flex justify-between text-gray-900 border border-gray-300 bg-transparent  hover:bg-black hover:text-white focus:ring-4  font-medium text-sm px-5 py-3 me-2 mb-2 "
        >
          Learn more about this service <IoIosArrowRoundForward size={25} />
        </button>
      </div>
    </div>
  );
};

export default Section_eight;
