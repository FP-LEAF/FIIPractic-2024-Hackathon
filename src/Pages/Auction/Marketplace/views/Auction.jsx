import React, { useState } from "react";
import Footer from "../../../Home/components/Footer";
import Navbar from "../../../Home/components/Navbar";
import { Button, Popover } from "flowbite-react";
import { Avatar, Dropdown } from "flowbite-react";

import imageSrc1 from "../../../Marketplace/components/ICON_BATRAN.png";
import imageSrc2 from "../../../Marketplace/components/ICON_CLASSIC.png";
import imageSrc3 from "../../../Marketplace/components/ICON_LOVE.png";
import imageSrc4 from "../../../Marketplace/components/ICON_MUZICA.png";
import imageSrc5 from "../../../Marketplace/components/ICON_NUNTA.png";
import imageSrc6 from "../../../Marketplace/components/ICON_STUDENT.png";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://www.justhourglasses.com/cdn/shop/products/chechen-smooth_78c88309-69a9-4a25-9147-56b269060d39.jpg?v=1483812145",
  });

  const imgArray = [imageSrc2];
  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  const [price, setPrice] = useState(300); // Changed the initial price to 300

  const [isEditing, setIsEditing] = useState(false);

  let [pagePrice, setPagePrice] = useState(300);

  const [bidderName, setBidderName] = useState("Diana Smith");

  const handleInputChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleBidInput = () => {
    setPagePrice(price);
    setBidderName("Bonnie Green");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mt-8 mb-8 flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div class="flex justify-center">
            <div class="text-center">
              <p class="text-3xl font-bold">Last Words Capsule</p>
            </div>
          </div>
          <div class="flex justify-center">
            <img
              src={imgArray[Math.floor(Math.random() * imgArray.length)]}
              alt=""
              className="w-3/4 h-3/4 aspect-square object-cover rounded-xl"
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              Special Opportunity
            </span>
            <h1 className="text-3xl font-bold">Bill Gates' Last Words</h1>

            <p className="text-gray-600 text-sm mt-2">
              Posted by:
              <a>
                <span className="ml-1 cursor-pointer hover:underline text-violet-600 font-semibold">
                  Bill Gates
                </span>
              </a>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Expory date:
              <a>
                <span className="ml-1 cursor-pointer hover:underline text-violet-600 font-semibold">
                  27 Nov 2067 - 15:30
                </span>
              </a>
            </p>
          </div>
          <p className="text-gray-700">
            Unlock the secrets of a visionary mind with this sealed time capsule
            containing the final thoughts and words of Bill Gates, the renowned
            tech mogul and philanthropist. Preserved for posterity, these
            profound musings offer a rare glimpse into the wisdom and foresight
            of one of the world's most influential figures. Uncover the untold
            insights and revelations from a man whose impact has shaped our
            modern world.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-sm mt-2">Current bidder:</p>
            {/* <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              rounded
              size="md" // Adjust size to make the photo bigger
            /> */}
            <a>
              <span className="ml-1 cursor-pointer hover:underline text-violet-600 font-semibold">
                {bidderName}
              </span>
            </a>
            <h6 className="text-2xl font-semibold">{`${pagePrice} $`}</h6>
          </div>

          <div className="flex flex-row items-center gap-12"></div>
          <div className="flex flex-row items-center gap-12">
            <Popover
              aria-labelledby="default-popover"
              content={
                <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <span className="py-4 px-6 rounded-lg">
                      <div className="relative">
                        {isEditing ? (
                          <input
                            type="number"
                            className="border border-gray-300 rounded-md py-2 px-4 w-32 focus:outline-none focus:border-blue-500"
                            value={price}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                          />
                        ) : (
                          <div
                            className="border border-gray-300 rounded-md py-2 px-4 w-32 cursor-pointer"
                            onClick={handleInputFocus}
                          >
                            {price.toFixed(2)}
                          </div>
                        )}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          $
                        </span>
                      </div>
                    </span>
                    <button
                      id="buy-btn"
                      className="bg-violet-800 text-white font-semibold py-3 px-5 rounded-xl h-full"
                      onClick={handleBidInput}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              }
            >
              <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
                Place Bid
              </button>
            </Popover>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductPage;
