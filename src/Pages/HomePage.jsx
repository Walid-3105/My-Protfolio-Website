import React from "react";
import Banner from "../Section/Banner";
import AboutMe from "../Section/AboutMe";
import Skill from "../Section/Skill";
import MyProjects from "../Section/MyProjects";
import Contact from "../Section/Contact";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <MyProjects></MyProjects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
