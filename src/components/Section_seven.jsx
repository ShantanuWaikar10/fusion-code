import React from "react";
import VIDEO_1 from "../assets/video1.mp4";
import { IoIosArrowRoundForward } from "react-icons/io";

const Section_seven = () => {
  return (
    <div className="gap-20 flex flex-col lg:flex-row min-h-[80vh] items-center">
      <div className="flex flex-col gap-5 px-10">
        <p className="font-semibold">Our online offering </p>
        <h1 className="text-3xl">Gestures to enhance your experience</h1>
        <p>
          Discover a suite of complimentary additions available with every
          order, including curated product samples, gift wrapping in our
          signature cotton bag and personalised gift messaging. 
        </p>
        <div></div>
        <button
          type="button"
          className="min-w-full md:min-w-[5vw] max-w-[57vw] flex justify-between text-gray-900 border border-gray-300 bg-transparent  hover:bg-black hover:text-white focus:ring-4  font-medium text-sm px-5 py-3 me-2 mb-2 "
        >
          Explore our online offering <IoIosArrowRoundForward size={25} />
        </button>
      </div>
      <div>
        <video
          autoPlay
          className="object-fill h-[40vh] md:h-[50vh] lg:h-[70vh] min-w-[60vw]"
          src={VIDEO_1}
          type="video/mp4"
          alt="video1"
        />
      </div>
    </div>
  );
};

export default Section_seven;
