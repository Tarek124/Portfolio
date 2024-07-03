import github from "./icons/github.png";
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import { Link } from "react-router-dom";

const MyInformation = () => {
  return (
    <div className="w-80 flex flex-col items-center p-4 bg-white z-40 rounded">
      <div className="p-4">
        <img
          src="https://i.ibb.co/xYht33r/IMG-4387.jpg"
          alt=""
          className="rounded shadow-lg"
        />
      </div>
      <h1 className="text-center text-lg font-semibold">Abdullah Al Tarek</h1>
      <p className="text-sm text-center my-2 py-1 px-4 rounded font-medium bg-gray-200">
        Web Developer
      </p>
      <div className="flex gap-2 my-3">
        <Link
          to="https://github.com/Tarek124"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={github} alt="github" />
        </Link>
        <Link
          to="https://www.facebook.com/abdullahal.tarek.37"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={facebook} alt="facebook" />
        </Link>
        <Link
          to="https://www.instagram.com/tarekbaee/"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={instagram} alt="instagram" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/abdullah-al-tarek-8b785a274/"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={linkedin} alt="linkedin" />
        </Link>
      </div>
      <div className="p-4 rounded shadow-inner">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
