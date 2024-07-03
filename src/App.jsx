import { Outlet } from "react-router-dom";
import MyInformation from "./componenets/MyInformation/MyInformation";
import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";

const App = () => {
  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-[1500px] flex items-start gap-4">
        <div className="z-40 mt-10 lg:flex hidden">
          <MyInformation />
        </div>
        <div className="flex flex-row-reverse">
          <div className="z-40 mt-10 lg:flex hidden items-start">
            <Navbar />
          </div>
          <div className="z-40 lg:pt-10 overflow-y-auto h-screen">
            <div className="z-40 fixed inset-x-0 flex lg:hidden  justify-center items-center">
              <Navbar />
            </div>
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
