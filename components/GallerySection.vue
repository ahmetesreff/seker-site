<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    showCount?: boolean;
    compact?: boolean;
  }>(),
  { titleTag: "h2", showCount: true, compact: false }
);

const { items, itemCount, strapiUrl } = useGalleryItemsData();
const safeItems = computed(() => {
  const all = items.value ?? [];
  return props.compact ? all.slice(0, 3) : all;
});
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">Galeri</component>
        <p class="section-subtitle">
          Seçili işler ve referanslar. Her galeri, kendi detay sayfasında tüm görselleriyle
          yer alır.
        </p>
      </div>
      <span v-if="props.showCount && !props.compact" class="hero-meta">{{ itemCount }} toplam</span>
    </div>

    <div class="gallery-grid">
      <NuxtLink
        v-for="(item, index) in safeItems"
        :key="item.id"
        :to="`/galeri/${item.id}`"
        class="gallery-card"
        :style="{ '--i': index }"
      >
        <div class="gallery-media">
          <img
            :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
            :alt="item.attributes.title"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="gallery-body">
          <h3 class="gallery-title">{{ item.attributes.title }}</h3>
          <span class="gallery-cta">Galeriyi gör &rarr;</span>
        </div>
      </NuxtLink>
    </div>

    <div v-if="!safeItems.length" class="empty-state">
      Henüz içerik yok. Strapi üzerinden yeni galeri ekleyebilirsiniz.
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/galeri">Tüm galeri &rarr;</NuxtLink>
    </div>
  </section>
</template>
