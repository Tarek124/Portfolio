import { useLayoutEffect, useRef } from "react";
import css from "./icons/css-3.png";
import firebase from "./icons/firebase.jpeg";
import github from "./icons/github.png";
import html from "./icons/html.png";
import js from "./icons/js.png";
import jwt from "./icons/JSON Web Tokens - jwt_io Logo PNG Vector (SVG) Free Download.jpeg";
import MongoDB from "./icons/MongoDB Logo PNG Vector (SVG) Free Download.jpeg";
import nextJs from "./icons/Next_js Icon Logo PNG Vector (SVG) Free Download.jpeg";
import nodejs from "./icons/nodejs.png";
import reactjs from "./icons/physics.png";
import expressjs from "./icons/physics.png";
import tailwindcss from "./icons/Top 20 Tailwind CSS Interview Questions and Answers.jpeg";
import gsap from "gsap";

const Skills = () => {
  const skills = [
    { name: "Html", image: html },
    { name: "css", image: css },
    { name: "tailwind", image: tailwindcss },
    { name: "javascript", image: js },
    { name: "react js", image: reactjs },
    { name: "node JS", image: nodejs },
    { name: "express js", image: expressjs },
    { name: "mongodb", image: MongoDB },
    { name: "next js", image: nextJs },
    { name: "github", image: github },
    { name: "firebase", image: firebase },
    { name: "JSON WEB Token", image: jwt },
  ];
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
        className="h-screen justify-center items-center item overflow-hidden p-4 sm:p-10 bg-indigo-400 absolute top-0 left-0 z-40 w-full flex flex-col"
      >
        <span
          id="title-2"
          className="xl:text-[170px] transform rotate-45 font-bold lg:text-9xl text-3xl text-white"
        >
         Skills
        </span>
      </div>
      <div>
        <div id="welcome">
          <div className="bg-white p-4 pt-24 lg:pt-8 gap-4">
            <h1 className="sm:pt-0 pt-4 text-center text-3xl sm:text-5xl font-semibold text-gray-600">
              Skills
            </h1>
            <div className="flex flex-wrap my-6 gap-4 justify-evenly">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="sm:w-44 w-40 p-6 flex flex-col justify-center items-center shadow hover:shadow-lg transition-all rounded "
                >
                  <h1 className="mb-4 text-xl text-center font-semibold text-gray-700">
                    {skill.name.toUpperCase()}
                  </h1>
                  <img src={skill.image} className=" w-20" alt={skill.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
