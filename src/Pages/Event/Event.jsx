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

import user1 from "./user1.jpg";

import button from "./buton_anu_nou.png";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Event = () => {
  const capsulesData = [
    {
      id: 1,
      name: "Classic Capsule",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image1,
      friend: false,
      authorName: "John Doe",
      endDate: "2024-12-31",
      authorPhoto: user1,
    },
    {
      id: 2,
      name: "Premium Capsule",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: image2,
      friend: false,
      authorName: "Jane Smith",
      endDate: "2025-01-15",
      authorPhoto: user1,
    },
    {
      id: 3,
      name: "Deluxe Capsule",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageSrc: image3,
      friend: false,
      authorName: "Emily Johnson",
      endDate: "2025-02-28",
      authorPhoto: user1,
    },
    {
      id: 4,
      name: "Vintage Capsule",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imageSrc: image4,
      friend: false,
      authorName: "Michael Brown",
      endDate: "2025-03-15",
      authorPhoto: user1,
    },
    {
      id: 5,
      name: "Elegant Capsule",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageSrc: image5,
      friend: false,
      authorName: "Jessica Davis",
      endDate: "2025-04-30",
      authorPhoto: user1,
    },
    {
      id: 6,
      name: "Modern Capsule",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      imageSrc: image6,
      friend: false,
      authorName: "David Wilson",
      endDate: "2025-05-15",
      authorPhoto: user1,
    },
    {
      id: 7,
      name: "Stylish Capsule",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      imageSrc: image1,
      friend: false,
      authorName: "Emma Martinez",
      endDate: "2025-06-30",
      authorPhoto: user1,
    },
    {
      id: 8,
      name: "Fashion Capsule",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      imageSrc: image2,
      friend: false,
      authorName: "Christopher Taylor",
      endDate: "2025-07-15",
      authorPhoto: user1,
    },
    {
      id: 9,
      name: "Trendy Capsule",
      description:
        "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imageSrc: image3,
      friend: false,
      authorName: "Olivia Garcia",
      endDate: "2025-08-31",
      authorPhoto: user1,
    },
    {
      id: 10,
      name: "Chic Capsule",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      imageSrc: image4,
      friend: true,
      authorName: "Daniel Hernandez",
      endDate: "2025-09-15",
      authorPhoto: user1,
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

        <div>
          <div className="h-[250px] w-full	">
            <a href="/capsule-creation">
              <img
                src={button}
                alt=""
                onClick={() => {}}
                className="w-full h-full object-contain"
              />
            </a>
            <h2 className="text-center	">Create a capsule for this occasion</h2>
          </div>
          <Tabs className="flex jus" aria-label="Default tabs" style="default">
            <Tabs.Item active title="All" icon={HiUserCircle}>
              <div className="flex justify-around items-center mt-20 mb-20 flex-wrap	">
                {capsulesData.map((capsule) => (
                  <CapsuleCard
                    key={capsule.id}
                    name={capsule.name}
                    description={capsule.description}
                    imageSrc={capsule.imageSrc}
                    authorName={capsule.authorName}
                    endDate={capsule.endDate}
                    authorPhoto={capsule.authorPhoto}
                  />
                ))}
              </div>
            </Tabs.Item>
            <Tabs.Item active title="Friends" icon={HiUserCircle}>
              <div className="flex justify-around items-center mt-20 mb-20 flex-wrap	">
                {capsulesData
                  .filter((cap) => {
                    return cap.friend;
                  })
                  .map((capsule) => (
                    <CapsuleCard
                      key={capsule.id}
                      name={capsule.name}
                      description={capsule.description}
                      imageSrc={capsule.imageSrc}
                      authorName={capsule.authorName}
                      endDate={capsule.endDate}
                      authorPhoto={capsule.authorPhoto}
                    />
                  ))}
              </div>
            </Tabs.Item>{" "}
          </Tabs>
        </div>
        <Footer className="mt-20" />
      </div>
    </>
  );
};

export default Event;
