// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    // "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    // "@nuxtjs/supabase",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "nuxt-aos",
    "nuxt-lodash"
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
      Vazirmatn: '200...700'
    }
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: ''
  },

  i18n: {
    lazy:true,
    langDir: "./lang",
    locales: [
      {code: 'en',  iso: 'en-US',  name: 'English', dir:'ltr', file: 'en.json'},
      {code: 'fa',  iso: 'fa-IR', name: 'Farsi', dir:'rtl', file: 'fa.json'}
    ],
    defaultLocale: 'en'
  },
  
  css: [
    "./assets/css/global.css"
  ]
});