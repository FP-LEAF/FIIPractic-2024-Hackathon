import React, { useEffect } from "react";
import smoke from "./smoke.png";

const Particles = () => {
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
    <div className="container">
      <img src={smoke} alt="Your Image" className="image" />
      <div className="particles"></div>
    </div>
  );
};

export default Particles;
