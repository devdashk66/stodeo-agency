import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

const WelcomeSection = () => {
  return (
    <>
      {/* Section containing an image and a text box */}
      <section className="flex  items-start max-w-screen-2xl m-auto lg:px-8 flex-col lg:flex-row px-8 relative">
        {/* Image on the left */}
        <Image
          className="w-full lg:w-2/4 -mb-10 lg:-mb-0"
          data-aos="fade-right"
          src="/images/img1.webp"
          width={748}
          height={567}
          alt="Welcome Image"
        />
        {/* Text box on the right */}
        <div
          data-aos="fade-up"
          className="bg-[#133ea1] px-10 py-10 md:px-14 md:py-14 xl:px-20 lg:absolute lg:w-[60%] lg:right-0 lg:bottom-5  w-[95%]"
        >
          {/* Text content */}
          <p className="text-[#899fd0]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          {/* Button with a link */}
          <Button title="About us" />
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
