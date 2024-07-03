import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff]">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-10 md:py-16 lg:py-24">
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
            <h2 className="text-xl font-semibold md:text-3xl">
              <span className="text-[#1353fe]">Building Lightning Fast</span>{" "}
              Webflow Dev MERN Stack Applications with Precision
            </h2>
          </div>
          <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <MdOutlineEmail className="text-xl mr-1 text-blue-400" />
              <p>Rampur, Feni, Bangladesh</p>
            </div>
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <CiLocationOn className="text-xl text-green-400" />
              <p>afrantarek123456789@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
        <div className="flex flex-row items-center justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
            <ul className="menu menu-horizontal">
              <li>
                <Link
                  to="/"
                  className="flex flex-col items-center rounded text-gray-500"
                >
                  <span className="text-[12px]"> About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Skills"
                  className="flex flex-col items-center rounded text-gray-500"
                >
                  <span className="text-[12px]">Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="flex flex-col items-center rounded text-gray-500"
                >
                  <span className="text-[12px]">Project</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex flex-col items-center rounded text-gray-500"
                >
                  <span className="text-[12px]">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-[991px]:flex-none">
            <p className="text-[#9a9898] max-[479px]:text-sm">
              © Copyright 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
