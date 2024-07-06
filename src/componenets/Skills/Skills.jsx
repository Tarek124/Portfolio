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

  return (
    <div className="bg-white p-4 pt-24 lg:pt-8 gap-4">
      <h1 className="sm:pt-0 pt-4 text-center text-3xl sm:text-5xl font-semibold text-gray-600">
        Skills
      </h1>
      <div className="flex flex-wrap my-6 gap-4 justify-evenly">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="animate__fadeIn animate__animated sm:w-44 w-32 p-4 sm:p-6 flex flex-col justify-center items-center shadow-md rounded "
          >
            <h1
              className="mb-4 text-lg
                   sm:text-xl text-center font-semibold text-gray-700"
            >
              {skill.name.toUpperCase()}
            </h1>
            <img src={skill.image} className="w-16 sm:w-20" alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
