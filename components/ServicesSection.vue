<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const services = [
  { title: "Mutfak tezgahı ve alın kaplama", slug: "mutfak-tezgahi", image: "/services/mutfak-tezgahi-ve-alin-kaplama.jpeg", desc: "Ölçüye özel mutfak tezgahı üretimi, kesim ve montaj. Alın kaplama dahil anahtar teslim çözüm." },
  { title: "Banyo tezgahı", slug: "banyo-tezgahi", image: "/services/banyo-tezgahi.jpg", desc: "Mermer, granit ve kuvars banyo tezgahları. Lavabo açılımı ve kenar profili dahil." },
  { title: "Merdiven basamakları", slug: "merdiven", image: "/services/merdiven-basamaklari.webp", desc: "İç ve dış mekan merdiven basamak, rıht ve süpürgelik uygulamaları." },
  { title: "Pencere ve balkon parapetleri", slug: "pencere-balkon", image: "/services/pencere-balkon-parapet.jpg", desc: "Doğal taş pencere denizlikleri ve balkon parapetleri." },
  { title: "Şömine kaplama", slug: "somine", image: "/services/somine-kaplama.jpg", desc: "Mermer ve doğal taş şömine kaplama ve dekoratif işler." },
  { title: "Mezar ve özel işler", slug: "mezar-ozel", image: "/services/mezar-ozel-is.webp", desc: "Mezar yapımı, anıt ve özel tasarım doğal taş projeleri." },
  { title: "Havuz uygulamaları", slug: "havuz", image: "/services/havuz.jpg", desc: "Havuz çevresi ve iç kaplama doğal taş uygulamaları." },
];

const visibleServices = computed(() =>
  props.compact ? services.slice(0, 3) : services
);
</script>

<template>
  <section class="section">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">Hizmetler</component>
        <p class="section-subtitle">
          Projeye uygun doğal taş seçimi, üretim ve uygulama süreçlerini anahtar teslim
          yürütüyoruz.
        </p>
      </div>
    </div>

    <div class="services-grid">
      <NuxtLink
        v-for="service in visibleServices"
        :key="service.title"
        :to="`/uygulamalarimiz?hizmet=${service.slug}`"
        class="service-card service-card--link"
      >
        <div class="service-media">
          <img :src="service.image" :alt="service.title" loading="lazy" decoding="async" />
        </div>
        <div class="service-body">
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <span class="service-cta">Uygulamaları gör &rarr;</span>
        </div>
      </NuxtLink>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/hizmetler">Tüm hizmetler &rarr;</NuxtLink>
    </div>
  </section>
</template>
