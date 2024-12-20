import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://eduweb-online-website.onrender.com",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//       define: {
//           'process.env.YOUR_BLOGS_URL': JSON.stringify(env.YOUR_BLOGS_URL),
//           // If you want to exposes all env variables, which is not recommended
//           // 'process.env': env
//       },
//       plugins: [react()],
//   };
// });
