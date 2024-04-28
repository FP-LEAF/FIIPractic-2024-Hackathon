import React, { useContext } from 'react';
import { DarkModeContext } from '../../Components/DarkMode/DarkModeProvider';
import imageSrc from './ICON_STUDENT.png';

function TestPage() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-center items-center`}>
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        alt="Neil image"
                        height="32"
                        src={imageSrc}
                        width="32"
                        className="rounded-full"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
            </div>
        </div>
    );
}

export default TestPage;