import React from "react";
import bannerImg from "../assets/walid dp.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnResume from "../Shared/BtnResume";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const texts = ["React Enthusiast", "JavaScript", "Express js", "HTML-CSS"];

  return (
    <div
      id="banner"
      className="w-11/12 min-h-screen mt-[70px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <div className="pt-20">
        <div className="space-y-5 min-h-[200px]">
          <h2 className="text-xl text-white">Welcome To My World</h2>
          <h3 className="text-5xl font-bold text-white">Hi, I'm SA AL Walid</h3>
          <p className="text-xl sm:text-2xl font-semibold text-white">
            Frontend Developer in
            <span className="pl-2 font-bold text-lime-400">
              <Typewriter
                words={texts}
                loop={true}
                cursor
                typeSpeed={80}
                deleteSpeed={50}
              />
            </span>
          </p>
          <p className="">
            From responsive design to smooth user interactions, I focus on every
            detail. Let’s collaborate to bring your vision to life. Explore my
            portfolio and see how I can help you achieve your goals.
          </p>
        </div>
        <div className="mt-6 flex gap-5 text-white">
          <Link to={"https://github.com/Walid-3105"} target="_blank">
            <FaGithub size={30}></FaGithub>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/syed-abdullah-al-walid-2b23a6332/"}
            target="_blank"
          >
            <FaLinkedin size={30}></FaLinkedin>
          </Link>
          <Link
            to={"https://www.facebook.com/sa.al.walid.2024"}
            target="_blank"
          >
            <FaFacebook size={30}></FaFacebook>
          </Link>
          <Link to={"https://www.instagram.com/saawalid_3105/"} target="_blank">
            <FaInstagram size={30}></FaInstagram>
          </Link>
        </div>
        <div className="mt-8 flex gap-2">
          <BtnResume></BtnResume>

          <button className="relative glass px-6 py-3 font-bold text-white btn rounded-lg overflow-hidden group">
            <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300"></span>
            <span className="absolute inset-0 bg-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></span>
            <span className="relative">
              <HashLink smooth to={"#contact"}>
                Contact Me
              </HashLink>
            </span>
          </button>
        </div>
      </div>
      <div>
        <img className="w-[490px]" src={bannerImg} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Banner;
