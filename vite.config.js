import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["bae2e0132c89.ngrok-free.app", "5e9a38a573c3.ngrok-free.app", "39ed0e25c921.ngrok-free.app"],
  },
});
