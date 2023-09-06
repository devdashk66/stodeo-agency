"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ pageName, title, bgColor = "#f8f9fa" }) => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      offset: 100, // For reverse effect
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section
        className={`px-8 text-center m-auto flex justify-center items-center flex-col py-40 gap-3 bg-[${bgColor}]`}
      >
        {/* ————————————— Page Name ————————————— */}
        <span
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-[#00aaff]"
        >
          {pageName}
        </span>

        {/* ————————————— Page Title ————————————— */}
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-2xl text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.5rem] leading-10 duration-200"
        >
          {title}
        </h1>

        {/* ————————————— Hero Description ————————————— */}
        <p data-aos="fade-up" data-aos-duration="1000" className="max-w-xl">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        {/* ————————————— Hero Button ————————————— */}
        <button
          data-aos="fade-up"
          data-aos-duration="1200"
          className="px-8 py-2 mt-4 text-white bg-[#3369e7] rounded-full hover:bg-[#2b59c4] duration-300 "
        >
          <Link href="/contact">Get start</Link>
        </button>
      </section>
    </>
  );
};

export default Hero;
