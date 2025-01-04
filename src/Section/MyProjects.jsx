import React from "react";
import project10 from "../assets/Project-10.jpg";
import project11 from "../assets/Project-11.jpg";
import project8 from "../assets/Project-8.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (
    <div id="project" className="my-20">
      <h3 className="text-3xl text-center font-bold text-white">My Project</h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 1 */}
        <div className="group card card-compact bg-base-100 w-full lg:w-96  shadow-xl">
          <figure>
            <img src={project10} alt="Project Picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          {/* Button visible on hover */}
          <div className="flex gap-2">
            <Link to={"https://github.com/Walid-3105"} target="_blank">
              <button className="absolute bottom-4 left-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-gray-700 text-white py-2 px-4 rounded font-bold flex text-center items-center gap-1">
                <FaGithub></FaGithub>
                GitHub
              </button>
            </Link>
            <Link to={"https://movie-details-699ea.web.app/"} target="_blank">
              <button className="absolute bottom-4 right-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#2869e2] text-white py-2 px-4 rounded font-bold">
                Live
              </button>
            </Link>
          </div>
        </div>
        {/* card 2 */}
        <div className="group card card-compact bg-base-100 w-full lg:w-96  shadow-xl">
          <figure>
            <img src={project11} alt="Project Picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          {/* Button visible on hover */}
          <div className="flex gap-2">
            <Link to={"https://github.com/Walid-3105"} target="_blank">
              <button className="absolute flex text-center items-center gap-1 bottom-4 left-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-gray-700 text-white py-2 px-4 rounded font-bold ">
                <FaGithub></FaGithub>
                GitHub
              </button>
            </Link>
            <Link to={"https://assignment-11-a70b0.web.app/"} target="_blank">
              <button className="absolute bottom-4 right-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#2869e2] text-white py-2 px-4 rounded font-bold">
                Live
              </button>
            </Link>
          </div>
        </div>
        {/* card 3 */}
        <div className="group card card-compact bg-base-100 w-full lg:w-96 shadow-xl">
          <figure>
            <img src={project8} alt="Project Picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          {/* Button visible on hover */}
          <div className="flex gap-2">
            <Link to={"https://github.com/Walid-3105"} target="_blank">
              <button className="absolute bottom-4 left-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-gray-700 text-white py-2 px-4 rounded font-bold flex text-center items-center gap-1">
                <FaGithub></FaGithub>
                GitHub
              </button>
            </Link>
            <Link
              to={"https://walid-assignment-8.netlify.app/"}
              target="_blank"
            >
              <button className="absolute bottom-4 right-24 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#2869e2] text-white py-2 px-4 rounded font-bold">
                Live
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
