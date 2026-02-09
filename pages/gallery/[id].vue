<script setup lang="ts">
const route = useRoute();
const { fetchGalleryItem, strapiUrl } = useStrapi();

const { data: item } = await useAsyncData(
  `gallery-item-${route.params.id}`,
  () => fetchGalleryItem(route.params.id as string)
);

if (!item.value) {
  throw createError({ statusCode: 404, message: "Icerik bulunamadi" });
}

useHead({
  title: `${item.value.attributes.title} — devbar.bar`,
});
</script>

<template>
  <div v-if="item" class="container">
    <NuxtLink to="/" class="back">&larr; Geri</NuxtLink>

    <h1>{{ item.attributes.title }}</h1>

    <!-- Cover -->
    <img
      :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
      :alt="item.attributes.title"
      class="cover"
    />

    <!-- Video -->
    <div v-if="item.attributes.videoUrl" class="video-wrapper">
      <iframe
        :src="item.attributes.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <!-- Gallery images -->
    <div
      v-if="item.attributes.images.data?.length"
      class="images"
    >
      <img
        v-for="img in item.attributes.images.data"
        :key="img.attributes.url"
        :src="strapiUrl(img.attributes.url)"
        :alt="img.attributes.alternativeText || item.attributes.title"
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: #555;
  text-decoration: none;
}

.back:hover {
  color: #000;
}

h1 {
  margin-bottom: 1.5rem;
}

.cover {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2rem;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.images img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}
</style>
