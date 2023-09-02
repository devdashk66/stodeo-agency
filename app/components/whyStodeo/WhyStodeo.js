import CountUp from "react-countup";
import Button from "../button/Button";

const WhyStodeo = () => {
  return (
    <>
      {/* Section containing content and a Button */}
      <section className="flex lg:justify-around lg:items-center max-w-screen-2xl m-auto py-44 px-8 gap-16 lg:gap-0 flex-col lg:flex-row">
        {/* Left-side content */}
        <div className="">
          <p
            className="w-[300px] mb-8"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          {/* Statistics section */}
          <div className="flex flex-col">
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-5xl text-[#00aaff] mt-3 font-bold "
            >
              <CountUp enableScrollSpy="true" delay={0} end={12} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1000">
              Years of experience
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-5xl text-[#00aaff] mt-3 font-bold"
            >
              <CountUp enableScrollSpy="true" delay={0} end={149} />
            </span>
            <span data-aos="fade-up" data-aos-duration="1400">
              Team members
            </span>
          </div>
          {/* Custom Button component */}
          <div data-aos="fade-up" data-aos-duration="1600">
            <Button color="#00aaff" title="Why Stodeo" />
          </div>
        </div>

        {/* Right-side content */}
        <div className={`px-0 lg:px-4 flex  flex-col gap-5`}>
          <span
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-[#00aaff]"
          >
            {/* Section title */}
            WHY STODEO?
          </span>

          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-2xl text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.5rem] leading-10 duration-200"
          >
            {/* Main headline */}
            You still thinking about why you should choose us?
          </h1>

          <p data-aos="fade-up" data-aos-duration="1000" className="max-w-xl">
            {/* Additional text content */}
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyStodeo;
