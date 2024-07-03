import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Educarion = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "0",
        duration: .5,
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
          duration: .5,
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
        className="h-screen items-center justify-center item overflow-hidden p-4 sm:p-10 bg-blue-400 absolute top-0 left-0 z-40 w-full flex flex-col"
      >
        <span
          id="title-2"
          className="xl:text-[170px] transform rotate-45 font-bold lg:text-9xl text-3xl text-white"
        >
          Education
        </span>
      </div>
      <div>
        <div id="welcome">
          <section className="py-8 bg-white lg:pt-6 pt-24">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Education</h2>

              <a
                href="#"
                className="flex flex-col  border border-gray-200 rounded-lg shadow md:flex-row "
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                  src="https://i.ibb.co/52pCxby/IMG-20211031-114749-1669945277589.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-start p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Shaheen Academy School And Collage
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    I completed my Secondary School Certificate in 2022 with a
                    GPA of 4.21 in Vocational Computer Science from Shaheen
                    Academy School and College.
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col my-4 border border-gray-200 rounded-lg shadow md:flex-row "
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                  src="https://i.ibb.co/RpxxFDP/received-636843968301086.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-start p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Feni Computer Institute
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Currently studying for a Diploma in Electrical Engineering
                    at Feni Computer Institute. I have completed 3 semesters
                    with excellent results and am currently in my 4th semester.
                    I also hold a Secondary School Certificate in Vocational
                    Computer Science with a GPA of 4.21 from Shaheen Academy
                    School and College.
                  </p>
                </div>
              </a>
              <h1 className="pt-4 text-xl font-semibold text-gray-600">
                Join me as I continue to learn and build innovative web
                applications!
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Educarion;
