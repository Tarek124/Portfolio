import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const labelStyle =
  "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
const inputStyle =
  "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer";

const AddNewProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const liveLink = form.liveLink.value;
    const repository = form.repository.value;
    const imageFile = form.image.files[0];

    const description = [
      { title: form.title1.value, description: form.description1.value },
      { title: form.title2.value, description: form.description2.value },
      { title: form.title3.value, description: form.description3.value },
      { title: form.title4.value, description: form.description4.value },
      { title: form.title5.value, description: form.description5.value },
    ];
    console.log(description);

    const formData = new FormData();
    formData.append("image", imageFile);

    toast.promise(
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=f9e24c97bda62c3d88b4a09eba82d5ee`,
          formData
        )
        .then((res) => {
          console.log(res.data);
          const imageUrl = res?.data?.data?.url;
          // You can now use imageUrl with title, description, liveLink, repository to save the project info
          const projectData = {
            name,
            description,
            liveLink,
            repository,
            imageUrl,
          };
          toast.promise(
            axios
              .post("https://back-end-beryl-nu.vercel.app/project", projectData)
              .then((res) => {
                console.log(res.data);
                form.reset();
              }),
            {
              loading: "saving...",
              success: <b>Saved!</b>,
              error: <b>Could not Saved.</b>,
            }
          );
        })
        .catch((err) => console.log(err)),
      {
        loading: "uploading image...",
        success: <b>Uploaded!</b>,
        error: <b>Could not uploaded.</b>,
      }
    );
  };

  return (
    <div className="py-8 bg-white lg:pt-6 pt-24">
      <Toaster />
      <h1 className="sm:pt-0 pt-4 text-3xl lg:p-8 p-4 sm:text-5xl font-semibold text-gray-600">
        Add New Project
      </h1>
      <form
        className="lg:p-8 p-4 animate__fadeIn animate__animated"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            className={inputStyle}
            placeholder=" "
            required
          />
          <label htmlFor="title" className={labelStyle}>
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="liveLink"
            className={inputStyle}
            placeholder=" "
            required
          />
          <label htmlFor="liveLink" className={labelStyle}>
            Site Link
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="repository"
            className={inputStyle}
            placeholder=" "
            required
          />
          <label htmlFor="repository" className={labelStyle}>
            Repository Link
          </label>
        </div>
        <div className="border p-4 mb-4 rounded">
          <h1 className="text-lg text-gray-600 font-semibold mb-3">
            Feature 1
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title1"
              className={inputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="description" className={labelStyle}>
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description1"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="border p-4 mb-4 rounded">
          <h1 className="text-lg text-gray-600 font-semibold mb-3">
            Feature 2
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title2"
              className={inputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="description" className={labelStyle}>
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description2"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="border p-4 mb-4 rounded">
          <h1 className="text-lg text-gray-600 font-semibold mb-3">
            Feature 3
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title3"
              className={inputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="description" className={labelStyle}>
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description3"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="border p-4 rounded">
          <h1 className="text-lg text-gray-600 font-semibold mb-3">
            Feature 4
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title4"
              className={inputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="description" className={labelStyle}>
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="border p-4 rounded">
          <h1 className="text-lg text-gray-600 font-semibold mb-3">
            Feature 5
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title5"
              className={inputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="description" className={labelStyle}>
              Title
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description5"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center w-full my-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="image"
              className="hidden"
            />
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewProject;
