import React from "react";
import BtnResume from "./BtnResume";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const tabs = (
    <div className="flex flex-col lg:flex-row gap-2 text-sm font-semibold mr-2 text-white">
      <HashLink className="hover:text-blue-400" smooth to="#banner">
        Home
      </HashLink>
      <HashLink className="hover:text-blue-400" smooth to="#about">
        About
      </HashLink>
      <HashLink className="hover:text-blue-400" smooth to="#skill">
        Skill
      </HashLink>
      <HashLink className="hover:text-blue-400" smooth to="#project">
        Project
      </HashLink>
    </div>
  );
  return (
    <div className="px-2 lg:px-12 navbar bg-base-200 bg-opacity-75 fixed top-0 left-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {tabs}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">SA AL Walid</a>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{tabs}</ul>
        </div>
        <BtnResume></BtnResume>
      </div>
    </div>
  );
};

export default NavBar;
