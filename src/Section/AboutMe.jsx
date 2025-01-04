import React from "react";
import bannerImg from "../assets/walid dp.png";
const AboutMe = () => {
  return (
    <div id="about" className="mt-20">
      <h3 className="text-4xl text-center font-bold text-white">About Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-10">
        <img className="w-[530px]" src={bannerImg} alt="" />
        <p className="mt-20 text-gray-300">
          <span className="text-3xl text-gray-200">Hi!</span> I'm Syed Abdullah
          Al Walid, a passionate and self-driven web developer from Lohagara,
          Chittagong, Bangladesh. I am currently a student in the English
          Department at Bandarban Govt College, where I am honing my language
          skills alongside my love for technology. I specialize in front-end and
          back-end web development, with proficiency in HTML, CSS, Tailwind,
          JavaScript, React, Node.js, Git, MongoDB, and Firebase. Through my
          academic journey and personal projects, I've gained hands-on
          experience in building interactive and responsive websites. In my free
          time, I enjoy exploring mobile game development and enhancing my
          English speaking skills, which I practice through daily activities. I
          am also passionate about graphic design and have completed a certified
          course in the field. Though I have no formal work experience yet, I
          have worked on over 10 projects, including a movie management site
          called "Movie Hive" and an online store project for an eco-adventure
          experience website. One of my ongoing projects is called FoodBuddy,
          which focuses on helping people donate and request food through a
          user-friendly platform. I'm always eager to learn new skills and tools
          to expand my development knowledge, and I am excited about creating
          impactful digital experiences. Feel free to connect with me!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
