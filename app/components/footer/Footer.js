import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="py-8 px-8 bg-[#efefef]">
        <div className="flex justify-between lg:flex-row flex-col gap-12 lg:gap-0">
          {/* About Stodeo */}
          <div>
            <div className="mb-12">
              <h3 className="text-[#3369e7] uppercase mb-3">About Stodeo</h3>
              <p className="max-w-md">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div>
              {/* Social Icons */}
              <h3 className="text-[#3369e7] uppercase mb-3">Connect</h3>
              <div className="flex gap-2">
                <FaFacebook className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaTwitter className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaInstagram className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaLinkedin className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaPinterest className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaWhatsapp className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
                <FaSnapchat className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-[#3369e7] uppercase mb-3">Navagition</h3>
            <ul className="space-y-3">
              <li className="relative pl-2 cursor-pointer group">
                HTML5
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                CSS3
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Javascript
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Next JS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Tailwind CSS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Swiper JS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="text-[#3369e7] uppercase mb-3">Services</h3>
            <ul className="space-y-3">
              <li className="relative pl-2 cursor-pointer group">
                Web Design
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                eCommerce
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Rect Website
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Next.js Website
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Frontend
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-[#3369e7] uppercase mb-3">Navagition</h3>
            <ul className="space-y-3">
              <li className="pl-2 group">
                43 Raymouth Rd. Baltemoer, London 3910
              </li>
              <li className="relative pl-2 cursor-pointer group">
                +1(123)-456-7890
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                +1(123)-456-7890
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                info@mydomain.com
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                stodeo@mydomain.com
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Copyright */}
        <div className="text-center mt-8 flex flex-col">
          <span>
            Copyright ©2023 All rights reserved | This template is made for
            practice purposes by Dev
          </span>
          <a
            className="text-xs"
            href="https://preview.colorlib.com/#stodeo"
            _blank
          >
            Orginal Site Link
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
