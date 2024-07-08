// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      title: "Portfolio",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
      bodyAttrs: {
        class: 'bg-gray-900',
      },
    },
  },
  devtools: {
    enabled: true,
    vscode: {
      reuseExistingServer: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    // "@nuxtjs/supabase",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
    }
  },
  css: [
    "./assets/css/global.css"
  ]
});