import React from "react";
import logo from "../assets/TB.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center max-h-26 max-w-26 pl-7">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      <div className=" m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/thomas-bretschneider-69b2a2224/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ThomasBrets" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
