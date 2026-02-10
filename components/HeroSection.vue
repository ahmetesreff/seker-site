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

function positionClass(index: number): string {
  const len = total.value;
  if (len <= 1) return 'hero-shot-2';

  const diff = ((index - activeIndex.value) % len + len) % len;
  if (diff === 0) return 'hero-shot-2';
  if (diff === 1) return 'hero-shot-3';
  if (diff === len - 1) return 'hero-shot-1';
  return 'hero-shot-hidden';
}

function goTo(idx: number) {
  activeIndex.value = idx;
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
  }, 4000);
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

    <div
      class="hero-visual"
      aria-hidden="true"
      @mouseenter="pauseTimer"
      @mouseleave="resetTimer"
      @click="next"
    >
      <div class="hero-stack">
        <div
          v-for="(img, index) in sliderImages"
          :key="img.id"
          class="hero-shot"
          :class="positionClass(index)"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div v-if="total > 1" class="hero-dots">
        <button
          v-for="(_, i) in sliderImages"
          :key="i"
          class="hero-dot"
          :class="{ active: i === activeIndex }"
          @click.stop="goTo(i)"
        />
      </div>
    </div>
  </section>
</template>
