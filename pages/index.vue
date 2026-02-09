<script setup lang="ts">
const { fetchGalleryItems, strapiUrl } = useStrapi();
const { data: items } = await useAsyncData("gallery-items", fetchGalleryItems);
const itemCount = computed(() => items.value?.length ?? 0);
</script>

<template>
  <div>
    <section class="hero">
      <div>
        <span class="eyebrow">Koleksiyon</span>
        <h1 class="hero-title">Gorunumu sakin, anlatimi guclu galeriler.</h1>
        <p class="hero-lede">
          Her proje icin sade bir vitrin: gorsel akisi bozmadan, detaylari
          on plana cikaran bir sunum.
        </p>
        <div class="hero-actions">
          <a href="#gallery" class="btn btn-primary">Galeriyi kesfet</a>
          <a href="#gallery" class="btn btn-ghost">Tum koleksiyonlar</a>
          <span class="hero-meta">{{ itemCount }} galeri</span>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="tile tile-a"></div>
        <div class="tile tile-b"></div>
        <div class="tile tile-c"></div>
      </div>
    </section>

    <section id="gallery">
      <div class="section-head">
        <div>
          <h2 class="section-title">Galeriler</h2>
          <p class="section-subtitle">
            Secli isler ve referanslar. Her galeri, kendi detay sayfasinda
            tum gorselleriyle yer alir.
          </p>
        </div>
        <span class="hero-meta">{{ itemCount }} toplam</span>
      </div>

      <div class="gallery-grid">
        <NuxtLink
          v-for="(item, index) in items"
          :key="item.id"
          :to="`/gallery/${item.id}`"
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
            <span class="gallery-cta">Galeriyi gor &rarr;</span>
          </div>
        </NuxtLink>
      </div>

      <div v-if="!items?.length" class="empty-state">
        Henuz icerik yok. Strapi uzerinden yeni galeri ekleyebilirsiniz.
      </div>
    </section>
  </div>
</template>
