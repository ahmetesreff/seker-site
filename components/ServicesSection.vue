<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const services = [
  { title: "Mermer ve granit imalatı", desc: "Kesim, şekillendirme ve montaj süreçleri." },
  { title: "Kuvars yüzey uygulamaları", desc: "Mutfak, banyo ve iç mekan çözümleri." },
  { title: "Mutfak tezgahları", desc: "Ölçüye özel üretim ve uygulama." },
  { title: "Banyo ve zemin kaplamaları", desc: "Dayanıklı, uzun ömürlü kaplama işleri." },
  { title: "Mermer pano ve şömine", desc: "Dekoratif ve kurumsal alan uygulamaları." },
  { title: "Mezarlık ve özel işler", desc: "Geleneksel ve modern tasarımlar." },
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
      <div v-for="service in visibleServices" :key="service.title" class="service-card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/hizmetler">Tüm hizmetler &rarr;</NuxtLink>
    </div>
  </section>
</template>
