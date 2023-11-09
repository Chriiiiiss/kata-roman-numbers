import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/// <reference types="vitest"/>
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react()],
  base: "",
});
