import React, { useContext, useEffect } from "react";
// import { DarkModeContext } from "../../Components/DarkMode/DarkModeProvider";
// import imageSrc from "./ICON_STUDENT.png";
import Particles from "../Pages/LiveOppening/Particles";

const CapsuleCard = ({ name, endDate, authorName, authorPhoto, imageSrc }) => {
  //   const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const particlesContainer = document.querySelector(".particles");

    // Create and append particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random()}s`;
      particlesContainer.appendChild(particle);
    }

    // Clean up on unmount
    return () => {
      particlesContainer.innerHTML = "";
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-white flex justify-center items-center h-max`}
    >
      <div style={{ maxWidth: "400px" }} className="w-full">
        <div className="p-8 bg-white border rounded shadow-sm text-center">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              {endDate}
            </a>{" "}
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title={name}
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {name}
          </a>
          <img
            src={imageSrc}
            alt="Meaningful alt text for an image that is not purely decorative"
            className="shake max-w-full max-h-full mx-auto"
          />
          <div className="particles"></div>
          <div className="flex flex-col items-center my-7">
            <a href="/" aria-label="Author" title="Author" className="mb-1">
              <img
                src={authorPhoto}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {authorName}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapsuleCard;
