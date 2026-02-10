<script setup lang="ts">
useHead({
  title: "Şeker Mermer | Trabzon Mermer, Granit ve Kuvars Tezgah İmalatı",
  meta: [
    {
      name: "description",
      content:
        "Trabzon mermer firması Şeker Mermer: granit tezgah imalatı, kuvars mutfak tezgahı, banyo ve merdiven uygulamaları. 1993'ten beri üretim ve montaj hizmeti.",
    },
    {
      name: "keywords",
      content:
        "trabzon mermer, granit tezgah, kuvars mutfak tezgahı, mermer imalatı, granit imalatı, trabzon mermer firması, mutfak tezgahı trabzon, mermer kesim, granit montaj",
    },
  ],
});
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection :compact="true" />
    <ServicesSection :compact="true" />
    <ProductsSection :compact="true" />
    <GallerySection :compact="true" />
    <BrandsSection :compact="true" />
    <ContactSection :compact="true" />
  </div>
</template>
