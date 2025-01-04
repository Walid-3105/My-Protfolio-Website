import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Walid_Resume.pdf";
const BtnResume = () => {
  return (
    <div>
      <button className="relative px-6 py-3 font-bold text-white btn rounded-lg overflow-hidden group">
        <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300"></span>
        <span className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
        <span className="relative">
          <Link to={resume} target="_blank" download={resume}>
            Download Resume
          </Link>
        </span>
      </button>
    </div>
  );
};

export default BtnResume;
