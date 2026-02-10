<script setup lang="ts">
const { items, strapiUrl } = useGalleryItemsData();
const heroItems = computed(() => (items.value ?? []).slice(-3));
</script>

<template>
  <section class="hero section">
    <div>
      <span class="eyebrow">1993'ten beri Trabzon</span>
      <h1 class="hero-title">Doğal taş projelerinde güvenilir çözüm.</h1>
      <p class="hero-lede">
        Mermer, granit ve kuvars uygulamalarını kurumsal ve konut projelerinde
        titizlikle üretir, uygularız.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/iletisim" class="btn btn-primary">Teklif al</NuxtLink>
        <NuxtLink to="/galeri" class="btn btn-ghost">Galeriyi gör</NuxtLink>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-label">Kuruluş</span>
          <span class="stat-value">1993</span>
        </div>
        <div class="stat">
          <span class="stat-label">Ekip</span>
          <span class="stat-value">6 personel</span>
        </div>
        <div class="stat">
          <span class="stat-label">Saha</span>
          <span class="stat-value">3 araç</span>
        </div>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div v-if="heroItems.length" class="hero-collage">
        <div
          v-for="(item, index) in heroItems"
          :key="item.id"
          class="hero-shot"
          :class="`hero-shot-${index + 1}`"
        >
          <img
            :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
            :alt="item.attributes.title"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div v-else class="hero-collage">
        <div class="hero-shot hero-shot-1">
          <img src="/products/rosavel.jpg" alt="Rosavel granit" loading="lazy" decoding="async" />
        </div>
        <div class="hero-shot hero-shot-2">
          <img src="/products/rosa-porrino.jpg" alt="Rosa Porrino granit" loading="lazy" decoding="async" />
        </div>
        <div class="hero-shot hero-shot-3">
          <img src="/products/rosa-beta.webp" alt="Rosa Beta granit" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>
</template>
