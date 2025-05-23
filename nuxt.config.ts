// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-gtag'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',
  
  ssr: false,
  
  routeRules: {
    '/': { redirect: '/anydeck' }
  },

  gtag: {
    id: 'G-DRVYT8MCWP'
  }
})