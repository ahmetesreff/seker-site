<script setup lang="ts">
const { items, strapiUrl } = useGalleryItemsData();

const fallbackImages = [
  { id: 'f1', src: '/products/rosavel.jpg', alt: 'Rosavel granit' },
  { id: 'f2', src: '/products/rosa-porrino.jpg', alt: 'Rosa Porrino granit' },
  { id: 'f3', src: '/products/rosa-beta.webp', alt: 'Rosa Beta granit' },
];

const sliderImages = computed(() => {
  const all = items.value ?? [];
  if (all.length > 0) {
    return all.slice(-8).map((item) => ({
      id: String(item.id),
      src: strapiUrl(item.attributes.coverImage.data.attributes.url),
      alt: item.attributes.title,
    }));
  }
  return fallbackImages;
});

const total = computed(() => sliderImages.value.length);
const activeIndex = ref(0);

function prev() {
  activeIndex.value = (activeIndex.value - 1 + total.value) % total.value;
  resetTimer();
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % total.value;
  resetTimer();
}

let timer: ReturnType<typeof setInterval> | undefined;

function startTimer() {
  if (total.value <= 1) return;
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % total.value;
  }, 5000);
}

function resetTimer() {
  if (timer) clearInterval(timer);
  startTimer();
}

function pauseTimer() {
  if (timer) clearInterval(timer);
}

onMounted(startTimer);
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>

<template>
  <section class="hero section stone-bg">
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

    <div
      class="hero-slider"
      @mouseenter="pauseTimer"
      @mouseleave="resetTimer"
    >
      <div
        v-for="(img, index) in sliderImages"
        :key="img.id"
        class="hero-slide"
        :class="{ active: index === activeIndex }"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          loading="lazy"
          decoding="async"
        />
      </div>

      <template v-if="total > 1">
        <button class="hero-arrow hero-arrow--prev" @click="prev" aria-label="Önceki">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <button class="hero-arrow hero-arrow--next" @click="next" aria-label="Sonraki">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <div class="hero-dots">
          <button
            v-for="(_, i) in sliderImages"
            :key="i"
            class="hero-dot"
            :class="{ active: i === activeIndex }"
            @click="activeIndex = i; resetTimer()"
          />
        </div>
      </template>
    </div>
  </section>
</template>
