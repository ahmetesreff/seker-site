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

  css: ["~/assets/fonts.css", "~/assets/main.css"],

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
      title: "Şeker Mermer | Trabzon Mermer ve Granit İmalatı",
      htmlAttrs: { lang: "tr" },
      meta: [
        {
          name: "description",
          content:
            "Trabzon mermer firması Şeker Mermer: granit tezgah imalatı, kuvars mutfak tezgahı, banyo, merdiven ve cephe uygulamaları. 1993'ten beri üretim ve montaj.",
        },
      ],
      link: [
        { rel: "icon", type: "image/webp", href: "/logo.webp" },
        { rel: "apple-touch-icon", href: "/logo.webp" },
      ],
    },
  },

  compatibilityDate: "2024-11-01",
});
