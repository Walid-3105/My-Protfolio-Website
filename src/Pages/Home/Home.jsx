import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/NavBar";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { ScrollProgress } from "../../components/magicui/scroll-progress";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      {/* <ScrollProgress className="top-[65px]" /> */}

      <Outlet></Outlet>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Home;
