import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //eslint-disable-next-line
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_SERVER_API": JSON.stringify(
        env.REACT_APP_SERVER_API
      ),
    },
    plugins: [react()],
    build: { chunkSizeWarningLimit: 1600 },
  };
});
