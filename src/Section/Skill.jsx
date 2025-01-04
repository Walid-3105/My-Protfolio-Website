import React from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaKey,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const Skill = () => {
  const skills = [
    {
      icon: <FaHtml5 size={65} className="text-orange-500" />,
      title: "HTML",
      text: "The language used to create web pages.",
    },
    {
      icon: <FaCss3Alt size={65} className="text-blue-500" />,
      title: "CSS",
      text: "Used to style and layout web pages.",
    },
    {
      icon: <FaJsSquare size={65} className="text-yellow-500" />,
      title: "JavaScript",
      text: "A language for creating interactive web pages.",
    },
    {
      icon: <FaReact size={65} className="text-blue-500" />,
      title: "React",
      text: "A library for building user interfaces.",
    },
    {
      icon: <FaNodeJs size={65} className="text-green-500" />,
      title: "Express.js",
      text: "A web framework for building Node.js applications.",
    },
    {
      icon: <FaDatabase size={65} className="text-green-500" />,
      title: "MongoDB",
      text: "A NoSQL database for storing data in documents.",
    },
    {
      icon: <FaGithub size={65} className="text-orange-500" />,
      title: "GitHub",
      text: "A platform for version control and code collaboration.",
    },
    {
      icon: <FaKey size={65} className="text-blue-500" />,
      title: "JWT Token",
      text: "A method for securely transmitting information between parties.",
    },
  ];

  return (
    <div id="skill" className="mt-20 mx-auto">
      <h3 className="text-center text-3xl font-bold text-white">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center  max-w-screen-sm md:min-w-fit lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 p-4 text-white"
          >
            <div className="space-x-3">{skill.icon}</div>
            <h3 className="text-xl font-bold m-0">{skill.title}</h3>
            <p className="mt-2">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
