import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import  profilePic  from "../assets/profile-portfolio.jpg";

const Header = () => {
  return (
    <div className="flex flex-wrap mx-4 mt-20">
      <div className=" w-full lg:w-1/2 content-center">
        <h1 className="text-4xl">Hello,I'm Bu</h1>
        <p>junior software developer</p>
        <ul className="mt-5 flex items-center">
          <li className="mr-5 ">
            <a
              className="block hover:text-slate-200"
              target="_blank"
              href="https://github.com/burahan206"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </li>
          <li className="mr-5">
            <a
              className="block hover:text-slate-200"
              target="_blank"
              href="https://www.linkedin.com/in/burahan-byh-396b81252/"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2">
         <div className="flex justify-center ">
          <img src={profilePic} className="rounded-full" alt="Profile"/>
         </div>
      </div>
    </div>
  );
};

export default Header;
