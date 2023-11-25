import { worker } from "../mocks/browser";

export default defineNuxtPlugin({
  name: "mocks",
  enforce: 'pre', // or 'post'
  async setup() {
    const config = useRuntimeConfig();
    if (config.app.mockApi === "true") {
      worker.start();
    }
  },
});
