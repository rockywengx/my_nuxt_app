// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  elementPlus: {
    importStyle: 'scss',
    // icon: true
  },
  modules: [
    // ...
    "@pinia/nuxt",
    "@element-plus/nuxt",
    'nuxt-icon'

  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    app: {
      debugMode: process.env.NUXT_DEBUG_MODE,
      mockApi: process.env.NUXT_MOCK_API,
    },
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as element;'
        }
      }
    }
  },
  css: ['~/assets/scss/app.scss'],
});
