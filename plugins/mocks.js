import { worker } from "../mocks/browser";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const config = useRuntimeConfig();
  if (config.app.debugMode === "true") {
    worker.start();
  }
});
