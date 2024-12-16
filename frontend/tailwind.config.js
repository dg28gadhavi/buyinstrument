const { nextui } = require('@nextui-org/react');

/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components//*.{js,ts,jsx,tsx,mdx}',
    './app//*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist//*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for theme variables
      addCommonColors: false, // override common colors (e.g., "blue", "green", "pink")
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: {
              50: '#f0f8ff',
              100: '#e0f0ff',
              200: '#cce0ff',
              300: '#b3d1ff',
              400: '#99c2ff',
              500: '#a3c9f1',
              600: '#8ca3d1',
              700: '#758eb1',
              800: '#5e7991',
              900: '#476471',
              DEFAULT: '#a3c9f1',
            },
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: {
              50: '#111b27',
              100: '#1a2738',
              200: '#233447',
              300: '#2c4158',
              400: '#354e69',
              500: '#1d4f8b',
              600: '#275f9c',
              700: '#316fad',
              800: '#3b7fbe',
              900: '#458fce',
              DEFAULT: '#1d4f8b',
            },
          },
        },
        // Add more custom themes if needed
      },
    }),
  ],
};