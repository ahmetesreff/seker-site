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
      title: "Şeker Mermer",
      htmlAttrs: { lang: "tr" },
      meta: [
        {
          name: "description",
          content:
            "Şeker Mermer, Trabzon’da mermer, granit ve kuvars uygulamalarında üretim ve montaj hizmetleri sunar.",
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
