import { BsArrowRight } from "react-icons/bs";
import { MdDesignServices, MdDeveloperBoard } from "react-icons/md";
import { GiSwordBrandish } from "react-icons/gi";
import { BiPhotoAlbum } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section className="max-w-screen-2xl m-auto px-8 py-20">
        <div className="flex flex-wrap items-center">
          <div
            data-aos="fade-up"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <MdDesignServices className="text-5xl" />
            <span className="text-lg font-normal my-6 block">Web Design</span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <MdDeveloperBoard className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Web Development
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <GiSwordBrandish className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Branding & Identity
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <BiPhotoAlbum className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Graphic Design
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <MdDesignServices className="text-5xl" />
            <span className="text-lg font-normal my-6 block">Web Design</span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <MdDeveloperBoard className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Web Development
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <GiSwordBrandish className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Branding & Identity
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-2/4 lg:w-1/4 relative border border-solid border-gray-400 h-[250px] flex flex-col justify-center pl-8 hover:text-[#3369e7] duration-300 cursor-pointer group"
          >
            <BiPhotoAlbum className="text-5xl" />
            <span className="text-lg font-normal my-6 block">
              Graphic Design
            </span>
            <BsArrowRight className="font-bold" />

            <span className="absolute top-0 left-0 w-0 h-1 duration-300 group-hover:bg-[#3369e7] origin-center group-hover:w-full"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
