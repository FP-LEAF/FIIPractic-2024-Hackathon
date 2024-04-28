import React, { useRef } from 'react';

import sound from './Bufnita.mp3'

function SoundComponent() {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="flex items-start gap-2.5">
            <div className="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button onClick={playAudio} className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                            <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </button>
                    <span className="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">3:42</span>
                </div>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
            <audio ref={audioRef} src={sound} />
        </div>
    );
}

export default SoundComponent;
