import GradientWrapper from "../../GradientWrapper"

import LayoutEffect from "../../LayoutEffect"

import { Card, Dropdown } from "flowbite-react";


const Hero = () => (
    <section className="mt-10"> {/* Add more top margin as needed */}
        <div className="custom-screen py-14 ">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            Soulmate Forever
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-300">

                        </p>
                        <div className="flex justify-center font-medium text-sm">

                        </div>
                    </div>
                    <GradientWrapper className="" wrapperClassName="max-w-3xl h-[250px] top-40 inset-0 sm:h-[300px] lg:h-[650px]">

                    </GradientWrapper>

                    <div className="absolute inset-x-0 bottom-30 flex justify-center pb-10">
                        <Card className="max-w-sm bg-opacity-20 bg-white border border-gray-700">
                            <div className="flex justify-end px-4 pt-4">
                                <Dropdown inline label="">
                                    <Dropdown.Item>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Export Data
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Delete
                                        </a>
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                            <div className="flex flex-col items-center ">
                                <img
                                    alt="Bonnie image"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                />
                                <h5 className="mb-1 text-xl font-medium text-white">Bonnie Green</h5>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-lg bg-purple-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    >
                                        Add friend
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    >
                                        Profile
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero