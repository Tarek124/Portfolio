import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProject = () => {
  const { data: projects = [], refetch } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const req = await axios.get("http://localhost:3000/project");
      return req.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.promise(
          axios.delete(`http://localhost:3000/project?id=${id}`).then((res) => {
            console.log(res.data);
            refetch();
          }),
          {
            loading: "deleting...",
            success: <b>Deleted!</b>,
            error: <b>Could not Delete.</b>,
          }
        );
      }
    });
  };

  return (
    <div className="bg-white p-4 pt-24 lg:pt-8 rounded">
      <Link
        to="/ae893f@d31k49dk"
        className="bg-gray-100 lg:mx-10 p-4 rounded-full shadow-md tooltip"
      >
        <IoAdd className="text-lg text-blue-500" />
      </Link>
      <div className="lg:p-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="animate__animated animate__fadeInLeft my-6 flex flex-col border border-gray-200 rounded-lg shadow md:flex-row "
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
              src={item.imageUrl}
              alt=""
            />
            <div className="flex flex-col justify-start p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.name}
              </h5>
              <div>
                <Link className="btn btn-primary mr-4">Edit</Link>
                <Link
                  className="btn btn-error"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProject;
