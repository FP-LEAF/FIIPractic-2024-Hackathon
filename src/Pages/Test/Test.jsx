import React, { useContext } from 'react';
import { DarkModeContext } from '../../Components/DarkMode/DarkModeProvider';
import imageSrc from './ICON_STUDENT.png';

function TestPage() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-white'} flex justify-center items-center`}>
            <div style={{ maxWidth: '400px' }} className="w-full">
                <div className="p-8 bg-white border rounded shadow-sm text-center">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            weekend
                        </a>{' '}
                        <span className="text-gray-600">— 1 Feb 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Jingle Bells
                    </a>
                    <img
                        src={imageSrc}
                        alt="Meaningful alt text for an image that is not purely decorative"
                        className="max-w-full max-h-full mx-auto"
                    />
                    <div className="flex flex-col items-center my-7">
                        <a href="/" aria-label="Author" title="Author" className="mb-1">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <a
                            href="/"
                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Vasile Melinte
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPage;
