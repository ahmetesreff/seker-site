export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: "static",
  },

  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
    },
  },

  modules: ["@nuxt/image"],

  css: ["~/assets/main.css"],

  image: {
    providers: {
      strapi: {
        provider: "~~/providers/strapi-image",
        options: {
          baseURL: process.env.STRAPI_URL || "http://localhost:1337",
        },
      },
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Seker Mermer",
      htmlAttrs: { lang: "tr" },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Manrope:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
});
