import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
/// <reference types="vitest" />
import { defineConfig } from 'vite' // Ensure this is imported correctly

// Determine if running in test mode (Vitest sets this environment variable)
const isTest = process.env.VITEST === 'true';

export default defineConfig({
    plugins: [
        tailwindcss(),
        // Only include reactRouter plugin if NOT running tests
        !isTest && reactRouter(),
        tsconfigPaths()
    ].filter(Boolean), // Filter out the 'false' value if isTest is true
    test: {
        globals: true,
        environment: 'happy-dom', // or 'jsdom'
        setupFiles: './vitest.setup.ts',
    },
});