<script setup lang="ts">
const { fetchGalleryItems, strapiUrl } = useStrapi();
const { data: items } = await useAsyncData("gallery-items", fetchGalleryItems);
</script>

<template>
  <div class="container">
    <header>
      <h1>devbar.bar</h1>
    </header>

    <main>
      <section class="gallery">
        <NuxtLink
          v-for="item in items"
          :key="item.id"
          :to="`/gallery/${item.id}`"
          class="gallery-card"
        >
          <img
            :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
            :alt="item.attributes.title"
            loading="lazy"
          />
          <h2>{{ item.attributes.title }}</h2>
        </NuxtLink>
      </section>

      <p v-if="!items?.length" class="empty">Henuz icerik yok.</p>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-card {
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.gallery-card:hover {
  transform: translateY(-4px);
}

.gallery-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.gallery-card h2 {
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  margin: 0;
}

.empty {
  text-align: center;
  color: #666;
  padding: 4rem 0;
}
</style>
