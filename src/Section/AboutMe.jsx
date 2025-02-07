import React from "react";
import bannerImg from "../assets/Animation - 1738918276657.json";
import Lottie from "lottie-react";

const AboutMe = () => {
  return (
    <div id="about" className="mt-20">
      <h3 className="text-4xl text-center font-bold text-white mt-4">
        About Me
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-10">
        <Lottie
          animationData={bannerImg}
          className="md:w-[400px] lg:w-[450px] mt-12 ml-0 lg:ml-6 "
        ></Lottie>
        <p className="mt-20 text-gray-300 ">
          <span className="text-3xl text-gray-200">Hi!</span> I'm Syed Abdullah
          Al Walid, a passionate web developer from Lohagara, Chittagong,
          Bangladesh. I specialize in front-end and back-end web development,
          with expertise in HTML, CSS, JavaScript, React, Node.js, Git, MongoDB,
          and Firebase. My journey began with HTML and CSS, and since then, I’ve
          developed a strong love for building interactive websites. Outside of
          coding, I'm a graphic design enthusiast and enjoy painting, playing
          sports, and exploring mobile game development. I’m also committed to
          improving my English-speaking skills. Though I don't have formal work
          experience yet, I’ve worked on over 10 projects, including "Movie
          Hive" and "FoodBuddy," a platform for food donations. I’m always eager
          to learn and grow, and I look forward to creating impactful digital
          experiences. Feel free to connect with me!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
