import { Avatar, Dropdown, Navbar } from "flowbite-react";

export const CapsuleCardModal = ({ userInfo, capsuleInfo }) => {
    console.log(capsuleInfo)
    return (
        <>
            <div className="absolute inset-x-0 top-0  hidden overflow-hidden md:flex md:inset-y-0">
                <svg
                    viewBox="0 0 88 88"
                    className="w-full max-w-screen-xl text-indigo-100"
                >
                    <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                    <circle
                        fillOpacity="0.2"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="44"
                    />
                    <circle
                        fillOpacity="0.2"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="37.5"
                    />
                    <circle
                        fillOpacity="0.3"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="29.5"
                    />
                    <circle
                        fillOpacity="0.3"
                        fill="currentColor"
                        cx="44"
                        cy="44"
                        r="22.5"
                    />
                </svg>
            </div>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {capsuleInfo.map((info, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
                    >
                        <div className="p-5">
                            <div className="flex justify-between">
                                <div className="flex items-center">

                                    <Avatar
                                        alt="User settings"
                                        img={userInfo.img}
                                        className="p-2"
                                        rounded
                                        size="md" // Adjust size to make the photo bigger
                                    />

                                    <span>{userInfo.name}</span>

                                </div>


                                {info.visibility === 'private' ? <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                </svg>
                                    : <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
                                    </svg>
                                }

                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                                </svg>

                                {info.favorite ? <svg class="w-6 h-6 text-gray-800 dark:text-white" style={{ color: "red" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                                </svg> : <svg class="w-6 h-6 text-gray-800 dark:text-white" style={{ color: "red" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                </svg>}

                            </div>

                            <p className="mb-2 font-bold">{info.title}</p>
                            <p className="text-sm leading-5 text-gray-900">
                                {info.description}
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                ))}
            </div>
        </>
    );
};

