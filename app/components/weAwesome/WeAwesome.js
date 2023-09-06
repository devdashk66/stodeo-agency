import Image from "next/image";
import {
  AiFillCamera,
  AiOutlineFileSearch,
  AiTwotoneHome,
} from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";

const WeAwesome = () => {
  return (
    <>
      {/* Section containing content */}
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row justify-center overflow-x-hidden gap-5 lg:gap-0">
        {/* Left-side content */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-2"
        >
          {/* Section title */}
          <span className="text-[#00aaff]">WHY US?</span>

          {/* Main headline */}
          <h1 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200">
            Why Are We Awesome?
          </h1>

          {/* Description */}
          <p className="py-2">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          {/* Icons and text sections */}
          <div className="flex flex-wrap items-center gap-5 mt-3">
            <span className="flex gap-4 items-center w-52">
              {/* Camera icon */}
              <AiFillCamera className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Photograpy
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* File search icon */}
              <AiOutlineFileSearch className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Find it here
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Home icon */}
              <AiTwotoneHome className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Inspire Photography
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Plane departure icon */}
              <FaPlaneDeparture className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Fly Your Dreams
            </span>
          </div>
        </div>

        {/* Right-side content with an image */}
        <div data-aos="fade-left">
          {/* Image component */}
          <Image src="/images/img2.webp" width={648} height={491} />
        </div>
      </section>
    </>
  );
};

export default WeAwesome;
