import github from "./icons/github.png";
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import LinkPreview from "../LinkPreview/LinkPreview";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const MyInformation = () => {
  const handleDownload = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume file
    const resumeUrl = "./resume2.pdf";

    fetch(resumeUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "your_resume.pdf"); // Set the default download file name here
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading resume:", error);
        // Handle error, e.g., show a message to the user
      });
  };

  return (
    <div className="w-80 flex flex-col items-center p-4 bg-white rounded">
      <div className="p-4">
        <img
          src="https://i.ibb.co/xYht33r/IMG-4387.jpg"
          alt=""
          className="rounded shadow-lg"
        />
      </div>
      <Link to="/" className="text-center text-lg font-semibold">
        Abdullah Al Tarek
      </Link>
      <p className="text-sm text-center my-2 py-1 px-4 rounded font-medium bg-gray-200">
        Web Developer
      </p>
      <div className="flex gap-2 my-3">
        <LinkPreview
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
          url="https://github.com/Tarek124"
        >
          <img className="w-8" src={github} alt="github" />
        </LinkPreview>

        <LinkPreview
          url="https://www.facebook.com/abdullahal.tarek.37"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={facebook} alt="facebook" />
        </LinkPreview>
        <LinkPreview
          url="https://www.instagram.com/tarekbaee/"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={instagram} alt="instagram" />
        </LinkPreview>
        <LinkPreview
          url="https://www.linkedin.com/in/abdullah-al-tarek-8b785a274/"
          className="p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded-full"
        >
          <img className="w-8" src={linkedin} alt="linkedin" />
        </LinkPreview>
      </div>
      <div className="p-4 my-4 w-full rounded shadow-inner bg-gray-100">
        <div className="flex items-start gap-2 mb-3">
          <div className="p-2 bg-white rounded-md">
            <FaPhoneSquareAlt className="text-2xl text-purple-400" />
          </div>
          <div>
            <h1 className="text-[12px] text-gray-400">Phone</h1>
            <p className="text-sm font-semibold text-gray-600">
              +8801864755088
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <div className="p-2 bg-white rounded-md">
            <MdOutlineEmail className="text-2xl text-blue-400" />
          </div>
          <div>
            <h1 className="text-[12px] text-gray-400">Email</h1>
            <p className="text-sm font-semibold text-gray-600">
              tarekabdullahal02gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <div className="p-2 bg-white rounded-md">
            <CiLocationOn className="text-2xl text-green-400" />
          </div>
          <div>
            <h1 className="text-[12px] text-gray-400">Location</h1>
            <p className="text-sm font-semibold text-gray-600">
              Feni,Bangladesh
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="p-2 bg-white  rounded-md">
            <CiCalendar className="text-2xl text-orange-400" />
          </div>
          <div>
            <h1 className="text-[12px] text-gray-400">Birthday</h1>
            <p className="text-sm font-semibold text-gray-600">09/08/2005</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="inline-flex  h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <MdFileDownload /> Resume
      </button>
    </div>
  );
};

export default MyInformation;
