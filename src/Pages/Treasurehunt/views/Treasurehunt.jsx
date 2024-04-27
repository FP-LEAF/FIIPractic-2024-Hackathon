import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Treasurehunt = () => {
  const generateRandomPosition = () => {
    const min = -18;
    const max = 18;
    const randomX = Math.floor(Math.random() * (max - min + 1) + min);
    const randomY = Math.floor(Math.random() * (max - min + 1) + min);
    return { x: randomX, y: randomY };
  };

  const buttons = [
    { id: 1, label: "Button 1", link: "google.com" },
    { id: 2, label: "Button 2", link: "google.com" },
    { id: 3, label: "Button 3", link: "google.com" },
  ];

  return (
    <div style={{ position: "relative" }}>
      <Navbar></Navbar>
      <iframe
        className="mx-auto py-6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43399.79138073654!2d27.57533811124144!3d47.16790160099256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sen!2sro!4v1714240116754!5m2!1sen!2sro"
        width="800"
        height="600"
        style={{ border: 0, position: "relative" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1 }}
      >
        {buttons.map((button) => {
          const { x, y } = generateRandomPosition();
          return (
            <a
              href={button.link}
              key={button.id}
              className={`absolute rounded-md p-4`}
              style={{ top: `${y}vh`, left: `${x}vw`, zIndex: 2 }}
            >
              <div style={{ width: "40px", height: "40px" }}>
                {" "}
                {/* Adjust width and height as needed */}
                <img
                  src="https://icons.veryicon.com/png/System/Small%20%26%20Flat/map%20marker.png"
                  alt="Description of the image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Treasurehunt;
