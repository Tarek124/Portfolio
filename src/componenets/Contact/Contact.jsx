import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Contact = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "0",
        duration: 0.6,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.6,
        })
        .from("#welcome", {
          opacity: 1,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen items-center justify-center item overflow-hidden p-4 sm:p-10 bg-gray-400 absolute top-0 left-0 z-40 w-full flex flex-col"
      >
        <span
          id="title-2"
          className="xl:text-[170px] transform rotate-45 font-bold lg:text-9xl text-3xl text-white"
        >
          Contact
        </span>
      </div>
      <div>
        <div id="welcome">
          <div className="bg-white p-4 pt-24 lg:pt-8 gap-4">
            <h1 className="sm:pt-0 pt-4 text-center text-3xl sm:text-5xl font-semibold text-gray-600">
              Contact
            </h1>
            <form className="border my-8 p-4 sm:p-8 rounded-lg w-full shadow-lg">
              <div className="gap-5 w-full flex-col">
                <div className="flex flex-col mb-4  w-full">
                  <label className="mb-2 text-gray-600" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="subject"
                    placeholder="Your subject"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-600" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-2 text-gray-600" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="p-3 bg-gray-100 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
