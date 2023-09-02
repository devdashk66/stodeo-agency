import Link from "next/link";

const Button = ({ title = "title", color = "#ffffff" }) => {
  return (
    <>
      <button>
        <Link
          className={`px-8 py-2 mt-6 block  border-2 border-[#00aaff] rounded-full hover:bg-[#00aaff] duration-300 text-[${color}]`}
          href="/contact"
        >
          {title}
        </Link>
      </button>
    </>
  );
};

export default Button;
