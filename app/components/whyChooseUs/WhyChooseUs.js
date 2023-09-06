import Image from "next/image";
import { FaUserAstronaut } from "react-icons/fa";
import { BsTrophy } from "react-icons/bs";
import Button from "../button/Button";

const WhyChooseUs = () => {
  return (
    <>
      {/* Section containing content */}
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row text-white justify-center overflow-x-hidden">
        {/* Left-side content with image */}
        <div data-aos="fade-right" className="">
          {/* Image component */}
          <Image src="/images/img2.webp" width={648} height={491} />
        </div>

        {/* Right-side content with text and icons */}
        <div
          data-aos="fade-left"
          className="bg-[#133ea1f6] flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-6 -mt-20 lg:-mt-0"
        >
          <div>
            {/* Title */}
            <h2 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200 text-white ">
              Grow your business
            </h2>
            {/* Description */}
            <p className="text-[#ffffff80] mt-1">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Icon and text sections */}
          <div className="flex gap-5 ">
            {/* Icon and text section 1 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <FaUserAstronaut className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">Far for away</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                Far far away, behind the word mountains, far from the countries.
              </p>
            </div>

            {/* Icon and text section 2 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <BsTrophy className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">Far from the countries</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                Far far away, behind the word mountains, far from the countries.
              </p>
            </div>
          </div>

          {/* Button component */}
          <Button title="Our Services" />
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
