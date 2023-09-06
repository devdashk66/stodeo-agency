import MySwiper from "./MySwiper";

const Testimonial = () => {
  return (
    <>
      {/* Testimonial section */}
      <section className="max-w-screen-2xl m-auto px-8 overflow-x-hidden gap-5 lg:gap-0 py-20">
        <div className="flex items-center flex-col mb-8">
          {/* Section title */}
          <span className="text-[#00aaff]">Testimonial</span>

          {/* Main headline */}
          <h1 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200">
            Happy Clients
          </h1>
        </div>
        <div>
          {/* Include the Swiper component for testimonials */}
          <MySwiper />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
