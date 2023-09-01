import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const MobileMenu = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      {/*////////////////////////////////////////////
        ————————————— Mobile Menu Icon —————————————
      ///////////////////////////////////////////////*/}
      <div className="lg:hidden block">
        <FaBars
          onClick={() => setClick(!click)}
          className={`text-3xl cursor-pointer ${click && "text-[#3369e7] "}`}
        />
      </div>

      {/*////////////////////////////////////////////
        ———————————— Background Overlay ————————————
      ///////////////////////////////////////////////*/}
      {click && (
        <div
          onClick={() => setClick(!click)}
          className="lg:hidden absolute w-screen h-screen -z-10 top-0 right-0 bg-white "
        ></div>
      )}

      {/*////////////////////////////////////////////
        ————————————— Mobile Navigation —————————————
      ///////////////////////////////////////////////*/}
      <ul
        className={`lg:hidden absolute top-0 ${
          click ? "right-0 opacity-100" : "-right-[1000px] opacity-0"
        } bg-white py-16 px-8 gap-5 w-56 h-screen shadow-2xl flex flex-col ease-in-out duration-200`}
      >
        {/*////////////////////////////////////////////
        ————————————— Menu Close Button —————————————
        ///////////////////////////////////////////////*/}
        <div className="lg:hidden absolute top-5 right-8 text-3xl font-bold">
          <RxCross1
            onClick={() => setClick(!click)}
            className="cursor-pointer hover:text-[#3369e7] ease-in-out duration-200"
          />
        </div>

        {/*////////////////////////////////////////////
          ————————————— Mobile Menu Item —————————————
        ///////////////////////////////////////////////*/}
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-200"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-200"
            href="/whyus"
          >
            Why Stodeo
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-500"
            href="/services"
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-200"
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-200"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#3369e7] ease-in-out duration-200"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
