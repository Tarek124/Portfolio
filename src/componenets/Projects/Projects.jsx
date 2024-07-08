import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Projects() {
  const navigate = useNavigate();

  function handleManageProject(e) {
    e.preventDefault();
    const password = e.target.password.value;
    console.log(password);
    if (password === "3825739") {
      navigate("/managemykdkldsfai3e9939023kldjf39jkjdf90834eurkldf90ejdfkjfi");
    } else if (password === "") {
      toast.error("Please enter password");
    } else {
      toast.error("Incorrect password");
    }
  }

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const req = await axios.get("http://localhost:3000/project");
      return req.data;
    },
  });
  return isLoading ? (
    <div className="flex h-screen justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="bg-white p-4 pt-24 lg:pt-8">
      <h1 className="sm:pt-0 pt-4 text-center text-3xl sm:text-5xl font-semibold text-gray-600">
        Project
      </h1>
      <div className="lg:p-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="my-10 lg:border rounded lg:shadow-md lg:p-10 animate__fadeInRight animate__animated"
          >
            <p className="text-2xl flex items-center font-semibold text-gray-700 mb-4">
              {item.name}
              <HiOutlineDotsVertical
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="text-sm cursor-pointer ml-1"
              />
            </p>
            <img className="shadow-md rounded" src={item.imageUrl} alt="" />
            <div className="text-sm flex flex-col gap-2 mt-6 prose prose-sm dark:prose-invert">
              <h1 className="sm:pt-0 pt-4 text-xl font-semibold text-gray-600">
                Description
              </h1>
              <div>
                {item?.description?.map((x) => (
                  <p key={index}>
                    <span className="font-semibold">{x.title}:</span>
                    {x.description}
                  </p>
                ))}
              </div>
            </div>
            <div className="my-4 flex items-center">
              <Link
                className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 "
                to={item.liveLink}
              >
                Live Preview
              </Link>
              <Link
                to={item.github}
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 "
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Repository Link
              </Link>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
        <Toaster />
        <div className="modal-box">
          <form onSubmit={handleManageProject}>
            <div>
              <label htmlFor="hs-trailing-button-add-on" className="sr-only">
                Label
              </label>
              <div className="flex rounded-lg shadow border">
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  className="py-3 px-4 block w-full rounded-s-lg text-sm bg-gray-100"
                />
                <button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  Button
                </button>
              </div>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Projects;
