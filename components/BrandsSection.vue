<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const brands = [
  { name: "Belenco", logo: "/brands/belenco-logo.png" },
  { name: "Çimstone", logo: "/brands/cimstone-logo.png" },
  { name: "Coante", logo: "/brands/coante.png" },
  { name: "Kromevye", logo: "/brands/kromevye-logo.png" },
  { name: "Lamar", logo: "/brands/lamar.svg", logoWrapClass: "is-lamar" },
  { name: "Maestro", logo: "/brands/maestro.svg" },
  { name: "NG Stone", logo: "/brands/ng-stone.png" },
  { name: "Orient", logo: "/brands/orient-logo.png" },
  { name: "Stonext", logo: "/brands/stonext.png" },
  { name: "T-One", logo: "/brands/t-one.webp" },
];

const visibleBrands = computed(() =>
  props.compact ? brands.slice(0, 6) : brands
);
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">Markalar</component>
        <p class="section-subtitle">İş ortaklarımız ve markalarımızı burada listeliyoruz.</p>
      </div>
    </div>

    <div class="brands-grid">
      <div v-for="brand in visibleBrands" :key="brand.name" class="brand-card">
        <div class="brand-logo-wrap" :class="brand.logoWrapClass">
          <img :src="brand.logo" :alt="brand.name" loading="lazy" />
        </div>
        <span class="brand-name">{{ brand.name }}</span>
      </div>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/markalar">Markalarımız &rarr;</NuxtLink>
    </div>
  </section>
</template>
