import { defineConfig } from "vite";

/** @see https://vite.dev/config/ */
export default defineConfig({
  root: ".",
  publicDir: false,
  server: {
    // NAS·외부 접속: 모든 네트워크 인터페이스에서 수신
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
    open: false,
    // Docker(NAS) 볼륨 마운트 시 파일 변경 감지
    watch: {
      usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 4173,
    strictPort: false,
  },
});
