<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const products = [
  {
    name: "Rosa Beta",
    image: "/products/rosa-beta.webp",
    meta: "Granit",
  },
  {
    name: "Rosa Porrino",
    image: "/products/rosa-porrino.jpg",
    meta: "Granit",
  },
  {
    name: "Rosavel",
    image: "/products/rosavel.jpg",
    meta: "Granit",
  },
];
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">Granit Koleksiyonu</component>
        <p class="section-subtitle">Seçili granit desenleri ve uygulama örnekleri.</p>
      </div>
    </div>

    <div class="products-grid">
      <article v-for="product in products" :key="product.name" class="product-card">
        <div class="product-media">
          <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" />
        </div>
        <div class="product-body">
          <h3 class="product-title">{{ product.name }}</h3>
          <span class="product-meta">{{ product.meta }}</span>
        </div>
      </article>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/urunler">Tüm ürünler &rarr;</NuxtLink>
    </div>
  </section>
</template>
