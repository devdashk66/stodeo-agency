import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <section className="max-w-screen-2xl m-auto pt-20 pb-36 px-8">
        {/* Statistics section */}
        <div className="flex flex-wrap md:justify-evenly  flex-row-reverse">
          <div className="flex flex-col w-full lg:w-1/4 mb-10 md:mb-0 md:items-center">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-6xl text-[#00aaff] mb-3 font-bold "
            >
              <CountUp enableScrollSpy="true" end={531929} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1000">
              Line of code
            </span>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 mb-10 md:mb-0 md:items-center">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-6xl text-[#00aaff] mb-3 font-bold "
            >
              <CountUp enableScrollSpy="true" end={4929} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1000">
              Cup of coffee
            </span>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 mb-10 md:mb-0 md:items-center">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-6xl text-[#00aaff] mb-3 font-bold "
            >
              <CountUp enableScrollSpy="true" end={482} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1000">
              Employees
            </span>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 mb-10 md:mb-0 md:items-center">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-6xl text-[#00aaff] mb-3 font-bold "
            >
              <CountUp enableScrollSpy="true" end={12} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1000">
              Years of experience
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
