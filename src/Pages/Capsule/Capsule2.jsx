import React from "react";
import Navbar from "../Home/components/Navbar";
import Hero2 from "./components/ui/Hero/Hero2";

import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Chat2 from "./Chat2";

import Carousel2 from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Footer from "./Footer";

import grandpaBackground from './grandpa_background.jpg'; // Import the local image





export default function Capsule() {


    const images2 = [9, 8, 7, 6, 5].map((number) => ({
        src: `https://placedog.net/${number}00/${number}00?id=${number}`
    }));



    return (
        <div className="bg-yellow-500 text-white min-h-screen min-h-[100vh] ">
            {/* Background image with dim effect */}
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0" style={{ backgroundImage: "url('https://wonderfulengineering.com/wp-content/uploads/2014/10/time-wallpaper-30.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content */}
            <Navbar />
            <div className="relative z-10">
                <Hero2 />
                {/* Card container positioned below the Hero */}
                <div className="pt-80 px-4 md:px-6 lg:px-8 xl:px-10">
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
                        <div className="flex justify-center">
                            <div className="flex-grow flex justify-center items-center mt-8">
                                <Carousel2 images={images2} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </div>
                            <Chat2></Chat2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
}
