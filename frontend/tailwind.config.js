/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure all relevant files are included
    './public/index.html',            // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // The `purge` option is now handled by the `content` array in Tailwind CSS 3.x,
  // but if you are using older versions (v2.x), you can use the following for purging:
  // purge: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
};