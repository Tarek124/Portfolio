import { Outlet } from "react-router-dom";
import MyInformation from "./componenets/MyInformation/MyInformation";
import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //       delay: 0.3,
  //     })
  //       .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.5,
  //       })
  //       .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
  //         opacity: 0,
  //         y: "-=30",
  //         delay: 0.3,
  //         stagger: 0.5,
  //       })
  //       .to("#intro-slider", {
  //         xPercent: "-100",
  //         duration: 1.3,
  //       })
  //       .from("#welcome", {
  //         opacity: 0,
  //         duration: 0.5,
  //       });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen overflow-hidden p-4 sm:p-10 bg-gradient-to-r from-[#020617] to-[#b314db]  text-white absolute top-0 left-0 z-40 w-full flex flex-col"
      >
        <h1
          className="xl:text-[150px] lg:text-8xl md:text-7xl sm:text-6xl text-4xl mt-10 font-bold mb-4 text-gray-300 title"
          id="title-1"
        >
          Delve into
        </h1>
        <span
          id="title-2"
          className="xl:text-[180px] font-bold lg:text-9xl text-8xl myText2"
        >
          My Tech Haven.
        </span>
        <h1
          className="md:text-8xl text-4xl sm:text-7xl title my-6 text-gray-400"
          id="title-3"
        >
          Develop by
        </h1>
        <h1
          className="sm:text-9xl text-6xl title  myText font-bold"
          id="title-4"
        >
          Abdullah Al Tarek
        </h1>
      </div>
      <div>
        <div id="welcome">
          <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="max-w-[1500px]  flex items-start gap-4">
              <div className="z-40 lg:flex hidden h-[95vh] overflow-y-auto mt-4">
                <MyInformation />
              </div>

              <div className="flex max-w-5xl mx-auto flex-row-reverse">
                <div className="z-40 mt-4 lg:flex hidden items-start">
                  <Navbar />
                </div>
                <div className="z-40 lg:pt-4 overflow-y-auto h-screen">
                  <div className="z-40 fixed inset-x-0 flex lg:hidden  justify-center items-center">
                    <Navbar />
                  </div>

                  <Outlet />

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
