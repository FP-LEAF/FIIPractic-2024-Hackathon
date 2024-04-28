import React from "react";

import Footer from "../Home/components/Footer.jsx";
import Navbar from "../Home/components/Navbar.jsx";

import CapsuleCard from "../../Components/CapsulelCard.jsx";
import image1 from "../../Components/assets/capsule-images/ICON_CLASSIC.png";
import image2 from "../../Components/assets/capsule-images/ICON_BATRAN.png";
import image3 from "../../Components/assets/capsule-images/ICON_LOVE.png";
import image4 from "../../Components/assets/capsule-images/ICON_MUZICA.png";
import image5 from "../../Components/assets/capsule-images/ICON_NUNTA.png";
import image6 from "../../Components/assets/capsule-images/ICON_STUDENT.png";

const Event = () => {
  const capsulesData = [
    {
      id: 1,
      name: "Classic Capsule",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image1,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image2,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image3,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image4,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image5,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image6,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image1,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image2,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image3,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image4,
    },
    // Add more capsules as needed
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar className="bg-transparent" />
        <div className="relative h-96 overflow-hidden">
          <img
            src="https://w.forfun.com/fetch/78/782e9a735d4b97fdce4a9e830cecb6e8.jpeg"
            alt="Hero background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h1 className="text-4xl font-bold">New YEAR Resolutions Event</h1>
          </div>
          <main className="flex"></main>
        </div>
        <div className="flex justify-around items-center mt-20 mb-20 flex-wrap	">
          {capsulesData.map((capsule) => (
            <CapsuleCard
              key={capsule.id}
              name={capsule.name}
              description={capsule.description}
              imageSrc={capsule.imageSrc}
            />
          ))}
        </div>
        <Footer className="mt-20" />
      </div>
    </>
  );
};

export default Event;
