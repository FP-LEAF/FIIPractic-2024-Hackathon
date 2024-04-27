// DarkModeToggle.js
import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
