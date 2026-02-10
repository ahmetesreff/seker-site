<script setup lang="ts">
useHead({
  title: "Galeri | Şeker Mermer",
  meta: [
    {
      name: "description",
      content:
        "Şeker Mermer galeri: tamamlanan projeler, mermer ve granit uygulamalarına ait görsel çalışmalar.",
    },
  ],
});
</script>

<template>
  <div>
    <GallerySection title-tag="h1" :show-count="false" />
  </div>
</template>
