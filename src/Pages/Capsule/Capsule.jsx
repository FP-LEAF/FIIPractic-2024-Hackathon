import React from "react";
import Navbar from "../../Pages/Home/components/Navbar";
import Hero from "../Capsule/components/ui/Hero/Hero";

import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Chat from "./Chat";




export default function Capsule() {

    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];



    return (
        <div className="bg-gray-900 text-white min-h-screen relative">
            {/* Background image with dim effect */}
            <div className="absolute inset-0 bg-[url('https://w.forfun.com/fetch/14/149f7d2058d6b6a3ac13993ee771024d.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
            </div>

            {/* Content */}
            <Navbar />
            <div className="relative z-10">
                <Hero />
                {/* Card container positioned below the Hero */}
                <div className="mt-80 px-4 md:px-6 lg:px-8 xl:px-10"> {/* You can adjust mt-24 to increase or decrease the space */}
                    <div className="w-full max-w-2xl mx-auto">

                        <Card className="bg-white border border-gray-700">
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                <br /><br />
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                <br /><br />
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-8">
                            <Carousel>
                                <img className="w-full h-full object-cover object-center" src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg" alt="..." />
                                <img className="w-full h-full object-cover" src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg" alt="..." />
                                <img className="w-full h-full object-cover" src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg" alt="..." />
                                <img className="w-full h-full object-cover" src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg" alt="..." />
                                <img className="w-full h-full object-cover" src="https://cuad.ask.fm/assets2/070/462/562/304/normal/image1.jpg" alt="..." />
                            </Carousel>
                            <Chat></Chat>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
