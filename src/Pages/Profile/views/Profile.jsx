import React, { useState, useEffect } from "react";
import Navbar from "../../Home/components/Navbar.jsx";

import Footer from "../components/Footer.jsx";
import api from "../../../api.js";
import { CapsuleCard } from "../components/CapsuleCard.jsx";
import { BundleCard } from "../components/BundleCard.jsx";
import { useNavigate } from "react-router";
import { ModalComp } from "../components/ModalComp.jsx";
import { Button } from "flowbite-react";

import { FaCoins } from "react-icons/fa";

export default function Profile() {
  let [userInfo, setUserInfo] = useState({});
  let [expandCapsules, setexpandCapsules] = useState(false);
  let [expandBundles, setexpandBundles] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  function decodeToken(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  useEffect(() => {
    const cssUrl =
      "https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css";
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = cssUrl;
    head.appendChild(link);
    return () => head.removeChild(link);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("TOKEN");
      let userTokenInfo = decodeToken(token);
      let { data } = await api.get(`user/userInfo?uuid=${userTokenInfo.uuid}`);
      if (data) {
        setUserInfo(data);
      }
    };
    fetchData();
  }, []);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <Navbar transparent />
      {userInfo && (
        <main className="profile-page">
          <section className="relative block" style={{ height: "500px" }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={userInfo.img}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <div className="flex flex-wrap gap-20 justify-center items-center">
                          <Button onClick={toggleModal}>Tree Structure</Button>
                          <div className="flex gap-5 items-center">
                            <FaCoins />
                            <span>
                              {parseInt(userInfo.unblocked_coins) +
                                parseInt(userInfo.blocked_coins)}
                            </span>
                          </div>
                          {openModal && (
                            <ModalComp onClose={toggleModal}></ModalComp>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            {userInfo.friends}
                          </span>
                          <span className="text-sm text-gray-500">Friends</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            {userInfo.comments}
                          </span>
                          <span className="text-sm text-gray-500">
                            Comments
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            {userInfo.nrOfCapsules}
                          </span>
                          <span className="text-sm text-gray-500">
                            Capsules
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                      {userInfo.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      {userInfo.country}
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                      {userInfo.job}
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                      {userInfo.study}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          {userInfo.quote}
                        </p>
                        <div className="flex justify-center cursor-pointer">
                          <div className="flex ml-2">
                            <a
                              className="font-normal text-pink-500"
                              onClick={(e) =>
                                setexpandCapsules(!expandCapsules)
                              }
                            >
                              My Capsules
                            </a>

                            <svg
                              class="w-6 h-6 text-gray-800 dark:text-white"
                              onClick={(e) =>
                                setexpandCapsules(!expandCapsules)
                              }
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                  expandCapsules
                                    ? "m19 9-7 7-7-7"
                                    : "m5 15 7-7 7 7"
                                }
                              />
                            </svg>
                          </div>

                          <div className="flex ml-2">
                            <a
                              className="font-normal text-pink-500"
                              onClick={(e) => setexpandBundles(!expandBundles)}
                            >
                              My Bundles
                            </a>

                            <svg
                              class="w-6 h-6 text-gray-800 dark:text-white"
                              onClick={(e) => setexpandBundles(!expandBundles)}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                  expandBundles
                                    ? "m19 9-7 7-7-7"
                                    : "m5 15 7-7 7 7"
                                }
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4">
              {expandCapsules && (
                <>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-5">
                      <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        My{" "}
                        <mark class="px-2 text-white bg-blue-500 rounded dark:bg-blue-500">
                          Capsules
                        </mark>
                      </h1>
                      <a href="/capsule-creation">
                        <svg
                          style={{ transform: "scale(2)" }}
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </a>
                    </div>

                    <CapsuleCard
                      userInfo={userInfo}
                      capsuleInfo={userInfo.capsules}
                    />
                  </div>
                </>
              )}

              {expandBundles && (
                <>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-5">
                      <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        My{" "}
                        <mark class="px-2 text-white bg-pink-500 rounded dark:bg-blue-500">
                          Bundles
                        </mark>
                      </h1>
                      <a href="/bundle-creation">
                        <svg
                          style={{ transform: "scale(2)" }}
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <BundleCard
                      userInfo={userInfo}
                      bundleInfo={userInfo.bundles}
                    />
                  </div>
                </>
              )}
            </div>
          </section>
        </main>
      )}
    </>
  );
}
