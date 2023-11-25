// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
    "@element-plus/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    app: {
      debugMode: process.env.NUXT_DEBUG_MODE,
    },
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
});
