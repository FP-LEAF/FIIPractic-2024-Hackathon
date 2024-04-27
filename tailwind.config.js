/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all js, jsx, ts, and tsx files in the src directory
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()          // Include Flowbite's content
  ],
  theme: {
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin()
  ],
  darkMode: 'class',
}
