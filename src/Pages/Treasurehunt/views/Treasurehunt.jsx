import React, { useState } from "react";
import Footer from "../../Home/components/Footer";
import Navbar from "../../Home/components/Navbar";
import { Button, Popover, Modal } from "flowbite-react";

const Treasurehunt = () => {
  const generateRandomPosition = () => {
    const min = -18;
    const max = 18;
    const randomX = Math.floor(Math.random() * (max - min + 1) + min);
    const randomY = Math.floor(Math.random() * (max - min + 1) + min);
    return { x: randomX, y: randomY };
  };
  const isSubscribed = false;
  const buttons = [
    { id: 1, label: "Button 1", link: "google.com", X: 0, Y: -1 },
    { id: 2, label: "Button 2", link: "google.com", X: 6, Y: -16 },
    { id: 3, label: "Button 3", link: "google.com", X: 11, Y: 7 },
  ];

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {" "}
      <div style={{ position: "relative" }}>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
          Capsule Treasure Hunt Map
        </h1>

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
              <Popover
                aria-labelledby="default-popover"
                content={
                  <div className="px-3 py-2">
                    <Button color="light" onClick={() => setOpenModal(true)}>
                      Instructions
                    </Button>

                    {isSubscribed ? (
                      <Modal
                        dismissible
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                      >
                        <Modal.Header>Capsule Instruction</Modal.Header>
                        <Modal.Body>
                          <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              Mergi la stanga si 2 pasi inapoi.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              Vezi sub banca daca e
                            </p>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={() => setOpenModal(false)}>
                            Ok
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    ) : (
                      <Modal
                        show={openModal}
                        size="lg"
                        onClose={() => setOpenModal(false)}
                      >
                        <Modal.Header>
                          Consider subscribing for instructions!
                        </Modal.Header>
                        <Modal.Body className="flex justify-center">
                          <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-orange-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
                            <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                              <div>
                                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                                  Pro Bundle
                                </h3>
                                <p className="text-indigo-100">
                                  Ebook + Video course
                                </p>
                              </div>

                              <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">
                                Best value
                              </span>
                            </div>

                            <div className="mb-4 space-x-2">
                              <span className="text-4xl font-bold text-white">
                                $49
                              </span>
                              <span className="text-2xl text-indigo-100 line-through">
                                $89
                              </span>
                            </div>

                            <ul className="mb-6 space-y-2 text-indigo-100">
                              {/* feat - start */}
                              <li className="flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>

                                <span>Ebook</span>
                              </li>
                              {/* feat - end */}

                              {/* feat - start */}
                              <li className="flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>

                                <span>Video course</span>
                              </li>
                              {/* feat - end */}

                              {/* feat - start */}
                              <li className="flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>

                                <span>Multiple examples</span>
                              </li>
                              {/* feat - end */}

                              {/* feat - start */}
                              <li className="flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>

                                <span>Work sheets</span>
                              </li>
                              {/* feat - end */}

                              {/* feat - start */}
                              <li className="flex items-center gap-1.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 shrink-0"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>

                                <span>Premium support</span>
                              </li>
                              {/* feat - end */}
                            </ul>

                            <a
                              href="#"
                              className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base"
                            >
                              Get the Pro Bundle
                            </a>
                          </div>
                        </Modal.Body>
                      </Modal>
                    )}
                  </div>
                }
              >
                <a
                  href="#"
                  key={button.id}
                  className={`absolute rounded-md p-4`}
                  style={{
                    top: `${button.Y}vh`,
                    left: `${button.X}vw`,
                    zIndex: 2,
                  }}
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
              </Popover>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Treasurehunt;
