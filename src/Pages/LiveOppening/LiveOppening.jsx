import React from "react";

import Footer from "../Home/components/Footer.jsx";
import Navbar from "../Home/components/Navbar.jsx";
import Timepicker from "../../Components/Timepicker.jsx";
import CapsuleCard from "../../Components/CapsulelCard.jsx";
import Chat from "./Chat";
import image1 from "../../Components/assets/capsule-images/ICON_CLASSIC.png";
import user1 from "./user1.jpg";

const LiveOppening = () => {
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
            <h1 className="text-4xl font-bold">
              User is about to open his capsule
            </h1>
          </div>
          <main className="flex"></main>
        </div>
        <div className="flex justify-around items-center mt-20 mb-20">
          <CapsuleCard
            name="O capsula plina de bunatati de la mamaie"
            endDate="1 Feb 2020"
            authorName="Mihai"
            authorPhoto={user1}
            imageSrc={image1}
          ></CapsuleCard>
          <Chat></Chat>
        </div>
        <Footer className="mt-20" />
      </div>
    </>
  );
};

export default LiveOppening;
