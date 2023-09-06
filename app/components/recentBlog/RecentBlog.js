import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const RecentBlog = () => {
  return (
    <>
      {/* Section containing recent blog posts */}
      <section
        className={`px-8 m-auto py-20 flex flex-col gap-8 overflow-x-hidden`}
      >
        {/* Section title */}
        <div data-aos="fade-left" data-aos-duration="1200">
          <span className="text-[#00aaff]">Our Blogs</span>

          <h2 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200">
            Recent Blog Posts
          </h2>
        </div>

        {/* List of recent blog posts */}
        <div className=" flex flex-wrap gap-3 justify-around items-start">
          {/* Individual blog post */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="w-full lg:w-80 flex flex-col gap-2"
          >
            {/* Date */}
            <span className="text-xs">23 Aug 2023</span>
            {/* Blog title */}
            <h4 className="text-base text-gray-500">
              Far far away, behind the word mountains, far from the countries
            </h4>
            {/* Blog description */}
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            {/* Button linking to the blog */}
            <button className="pt-3 pb-6">
              <Link href="/">
                {/* Right arrow icon */}
                <BsArrowRight className="bg-gray-300 text-[#00aaff] text-4xl p-2 rounded-full hover:bg-[#00aaff] hover:text-[#ffffff] duration-300 " />
              </Link>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1400"
            className="w-full lg:w-80 flex flex-col gap-2"
          >
            {/* Date */}
            <span className="text-xs">23 Aug 2023</span>
            {/* Blog title */}
            <h4 className="text-base text-gray-500">
              Far far away, behind the word mountains, far from the countries
            </h4>
            {/* Blog description */}
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            {/* Button linking to the blog */}
            <button className="pt-3 pb-6">
              <Link href="/">
                {/* Right arrow icon */}
                <BsArrowRight className="bg-gray-300 text-[#00aaff] text-4xl p-2 rounded-full hover:bg-[#00aaff] hover:text-[#ffffff] duration-300 " />
              </Link>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1600"
            className="w-full lg:w-80 flex flex-col gap-2"
          >
            {/* Date */}
            <span className="text-xs">23 Aug 2023</span>
            {/* Blog title */}
            <h4 className="text-base text-gray-500">
              Far far away, behind the word mountains, far from the countries
            </h4>
            {/* Blog description */}
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            {/* Button linking to the blog */}
            <button className="pt-3 pb-6">
              <Link href="/">
                {/* Right arrow icon */}
                <BsArrowRight className="bg-gray-300 text-[#00aaff] text-4xl p-2 rounded-full hover:bg-[#00aaff] hover:text-[#ffffff] duration-300 " />
              </Link>
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1800"
            className="w-full lg:w-80 flex flex-col gap-2"
          >
            {/* Date */}
            <span className="text-xs">23 Aug 2023</span>
            {/* Blog title */}
            <h4 className="text-base text-gray-500">
              Far far away, behind the word mountains, far from the countries
            </h4>
            {/* Blog description */}
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            {/* Button linking to the blog */}
            <button className="pt-3 pb-6">
              <Link href="/">
                {/* Right arrow icon */}
                <BsArrowRight className="bg-gray-300 text-[#00aaff] text-4xl p-2 rounded-full hover:bg-[#00aaff] hover:text-[#ffffff] duration-300 " />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentBlog;
