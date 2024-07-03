import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { BsFiles } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white rounded border lg:border-none lg:shadow-none shadow-lg">
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal lg:menu-vertical gap-2">
          <li>
            <Link
              to="/"
              className="flex flex-col items-center rounded text-gray-500"
            >
              <CiUser className="text-xl" />
              <span className="text-[12px]"> About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className="flex flex-col items-center rounded text-gray-500"
            >
              <VscTools className="text-xl" />
              <span className="text-[12px]">Skills</span>
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="flex flex-col items-center rounded text-gray-500"
            >
              <BsFiles className="text-xl" />
              <span className="text-[12px]">Project</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex flex-col items-center rounded text-gray-500"
            >
              <MdOutlineContactPage className="text-xl" />
              <span className="text-[12px]">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
