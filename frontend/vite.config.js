// Importing the `defineConfig` function from Vite to create the configuration object
// The `defineConfig` function is used to provide type safety and autocompletion for the Vite configuration.
import { defineConfig } from 'vite';

// Importing the React plugin for Vite to enable React support in the project.
// The React plugin allows Vite to transform and optimize React code (including JSX syntax) during the build process.
import react from '@vitejs/plugin-react';

// Importing the Tailwind CSS plugin for Vite to integrate Tailwind CSS into the Vite build system.
// This plugin ensures that Tailwind's utility-first CSS classes are processed and included in the production build.
import tailwindcss from '@tailwindcss/vite';

// Exporting the default configuration object for Vite using `defineConfig`.
// The configuration object defines various settings for Vite's build process and development server.
export default defineConfig({
  // `plugins` is an array where you can specify additional plugins to extend Vite's functionality.
  // In this case, we are adding the React plugin and Tailwind CSS plugin to integrate both React support and Tailwind CSS styling.
  plugins: [
    // The `react()` function is invoked to add the React plugin for handling JSX code and React-related features.
    // This enables features like React fast-refresh, JSX compilation, and automatic error overlays in development.
    react(),

    // The `tailwindcss()` function is invoked to add Tailwind CSS plugin to Vite.
    // This allows Vite to process Tailwind CSS files (e.g., `@tailwind` directives) and generate the corresponding CSS output.
    // Tailwind CSS utility classes are tree-shaken to ensure that only the classes used in the project are included in the production build.
    tailwindcss(),
  ],
});
