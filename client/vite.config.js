import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://eduweb-online-website.onrender.com",
        // target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        proxyTimeout: 3000, // Stricter timeout
        onError: (err, req, res) => {
          console.error("Proxy error:", err);
          res.writeHead(502, {
            "Content-Type": "application/json",
          });
          res.end(JSON.stringify({ error: "Proxy connection failed" }));
        }
      },
    },
  },
});
