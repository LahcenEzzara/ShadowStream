import { FunctionComponent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        <span>Copyright Lahcen Ezzara</span>
        <span className="hidden md:block"> &copy; 2024</span>
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block"></p>
        <div className="flex gap-2">
          <a
            href="https://github.com/LahcenEzzara"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition duration-300"
          >
            <AiFillGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
