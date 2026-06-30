import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
  // set base to "/<repo>/". For Netlify/Vercel or a custom domain, leave as "/".
  base: "/",
});
