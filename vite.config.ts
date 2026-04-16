import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    // Use a relative base path so assets load correctly in subdirectories (like GitHub Pages)
    base: "./",
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
