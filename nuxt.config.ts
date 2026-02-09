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
      title: "devbar.bar",
      htmlAttrs: { lang: "tr" },
    },
  },

  compatibilityDate: "2024-11-01",
});
