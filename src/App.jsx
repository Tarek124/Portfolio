import { Outlet } from "react-router-dom";
import MyInformation from "./componenets/MyInformation/MyInformation";
import Navbar from "./componenets/Navbar/Navbar";

const App = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-[1500px] flex">
        <MyInformation />
        <div className="flex flex-row-reverse">
          <Navbar /> <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
