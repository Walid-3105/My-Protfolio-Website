import React, { useState } from "react";
import project10 from "../assets/Project-10.jpg";
import project11 from "../assets/Project-11.jpg";
import project8 from "../assets/Project-8.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BorderBeam } from "../components/magicui/border-beam";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Movie Hive",
      image: project10,
      tech: "#React, #Tailwind CSS, #Firebase",
      briefDescription: "A movie app using React, Tailwind CSS, and Firebase.",
      github: "https://github.com/Walid-3105",
      live: "https://movie-details-699ea.web.app/",
      details:
        "A dynamic movie portal where users can add, update, and manage their favorite movies. It includes secure user authentication and responsive design.",
      challenges:
        "Faced issues with implementing private routes and managing complex state for movie data. Overcame by using React Context API and Firebase Authentication.",
      improvements:
        "Plan to integrate a recommendation system using machine learning and enhance the UI with animation libraries.",
    },
    {
      id: 2,
      title: "Food Buddy",
      image: project11,
      tech: "#React, #JWT Token, #JS",
      briefDescription:
        "A food donation app built with React and JWT Token authentication.",
      github: "https://github.com/Walid-3105",
      live: "https://assignment-11-a70b0.web.app/",
      details:
        "A platform for connecting food donors with those in need. Features CRUD operations for food items and secure authentication.",
      challenges:
        "Implementing JWT-based authentication and managing food status dynamically was challenging. Learned to use TanStack Query for better API data management.",
      improvements:
        "Need to add real-time notifications for food requests and improve search functionality with better filters.",
    },
    {
      id: 3,
      title: "Gadget Heaven",
      image: project8,
      tech: "#React, #JS, #DaisyUI, #Firebase",
      briefDescription:
        "An e-commerce site for gadgets built using React, DaisyUI, and Firebase.",
      github: "https://github.com/Walid-3105",
      live: "https://walid-assignment-8.netlify.app/",
      details:
        "An online store for gadgets featuring secure login, product management, and a clean, responsive UI.",
      challenges:
        "Had difficulty managing cart state across components. Solved it using localStorage and Context API.",
      improvements:
        "Plan to add a payment gateway integration and optimize site performance for faster loading.",
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="project" className="my-20">
      <h3 className="text-3xl text-center font-bold text-white">My Projects</h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group card card-compact bg-base-100 w-full lg:w-96 shadow-xl"
          >
            <figure>
              <img src={project.image} alt={`${project.title} Picture`} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.tech}</p>
            </div>
            <div className="flex gap-2 justify-center mt-4">
              <button
                onClick={() => handleOpenModal(project)}
                className="relative px-6 py-3 font-bold text-white btn rounded-lg overflow-hidden group mb-4 glass"
              >
                <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300"></span>
                <span className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
                <span className="relative">See Details</span>
              </button>
            </div>
            <BorderBeam />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} Image`}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4 text-white">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mt-2">
              <strong>Main Tech Stack:</strong> {selectedProject.tech}
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Brief Description:</strong>{" "}
              {selectedProject.briefDescription}
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Details:</strong> {selectedProject.details}
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Improvements:</strong> {selectedProject.improvements}
            </p>
            <div className="flex justify-between mt-4">
              <Link to={selectedProject.github} target="_blank">
                <button className="flex items-center gap-2 bg-gray-700 text-white py-2 px-4 rounded font-bold">
                  <FaGithub />
                  GitHub
                </button>
              </Link>
              <Link to={selectedProject.live} target="_blank">
                <button className="bg-blue-500 text-white py-2 px-4 rounded font-bold">
                  Live
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjects;
