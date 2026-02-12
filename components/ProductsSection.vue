<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const categories = [
  {
    name: "Mermer",
    items: [
      { name: "Muğla Beyaz", image: "/products/mermer/mugla-beyaz.png" },
      { name: "Amasya Bej", image: "/products/mermer/amasya-bej.png" },
      { name: "Bursa Siyah", image: "/products/mermer/bursa-siyah.png" },
      { name: "Rustik Bej", image: "/products/mermer/rustik-bej.png" },
      { name: "Traverten", image: "/products/mermer/traverten.png" },
    ],
  },
  {
    name: "Granit",
    items: [
      { name: "Star Galaxy", image: "/products/granit/star-galaxy-granit.png" },
      { name: "Rosa Minho", image: "/products/granit/rosa-minho-granit.png" },
      { name: "Ankara Füme", image: "/products/granit/ankara-fume-granit.png" },
      { name: "Rosa Porrino", image: "/products/granit/rosa-porrino-granit.png" },
      { name: "River Black", image: "/products/granit/river-black-granit.png" },
      { name: "Tan Brown", image: "/products/granit/tan-brown-granit.png" },
    ],
  },
  {
    name: "Quartz",
    items: [
      { name: "Belenco", image: "/products/quartz/belenco-quartz.png" },
      { name: "Çimstone", image: "/products/quartz/cimstone-quartz.png" },
      { name: "Maestro", image: "/products/quartz/maestro-quartz.png" },
      { name: "Coante", image: "/products/quartz/coante-quartz.png" },
    ],
  },
  {
    name: "Porselen",
    items: [
      { name: "Lamar", image: "/products/porselen/lamar-porselen.png" },
      { name: "NG Stone", image: "/products/porselen/ng-stone-porselen.png" },
      { name: "T-One", image: "/products/porselen/t-one-porselen.png" },
      { name: "Stonext", image: "/products/porselen/stonext-porselen.png" },
    ],
  },
  {
    name: "Evyeler",
    items: [],
  },
];

const visibleCategories = computed(() =>
  props.compact ? categories.slice(0, 2) : categories
);
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">Ürünler</component>
        <p class="section-subtitle">
          Mermer, granit, quartz ve porselen koleksiyonumuz. Projenize uygun doğal taş seçenekleri.
        </p>
      </div>
    </div>

    <div v-for="cat in visibleCategories" :key="cat.name" class="product-category">
      <h2 v-if="props.titleTag === 'h1'" class="category-title">{{ cat.name }}</h2>
      <h3 v-else class="category-title">{{ cat.name }}</h3>

      <div v-if="cat.items.length" class="products-grid">
        <article v-for="product in cat.items" :key="product.name" class="product-card">
          <div class="product-media">
            <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" />
          </div>
          <div class="product-body">
            <h3 class="product-title">{{ product.name }}</h3>
          </div>
        </article>
      </div>

      <p v-else class="category-soon">Yakında eklenecek.</p>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/urunler">Tüm ürünler &rarr;</NuxtLink>
    </div>
  </section>
</template>
