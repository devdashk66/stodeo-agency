"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      {/*////////////////////////////////////////////
      ——————————————— Header section ———————————————
      ///////////////////////////////////////////////*/}
      <header className="flex justify-between items-center max-w-screen-2xl m-auto py-5 px-8 relative">
        {/*////////////////////////////////////////////
           ————————————————— Logo —————————————————
        ///////////////////////////////////////////////*/}
        <div>
          <Link className="text-[#3369e7] text-2xl font-bold" href="/">
            Stodeo
          </Link>
        </div>

        {/*////////////////////////////////////////////
        ————————————————— Mobile Menu —————————————————
        ///////////////////////////////////////////////*/}
        <MobileMenu />

        {/*////////////////////////////////////////////
        ————————————————— Navigation —————————————————
        ///////////////////////////////////////////////*/}
        <nav className="lg:block hidden">
          <ul className="flex gap-5 text-[#3369e7b3]">
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
                className="hover:text-[#3369e7] ease-in-out duration-200"
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
        </nav>
      </header>
    </>
  );
};

export default Header;
