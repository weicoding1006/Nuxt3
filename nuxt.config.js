// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // 僅在伺服器端可用的環境變數
    apiSecret: process.env.API_SECRET,
    public: {
      // 客戶端和伺服器端都可用的環境變數
      apiBaseUrl: process.env.API_BASE_URL,
    },
  }
})
