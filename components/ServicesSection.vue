<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);

const services = [
  { title: "Mutfak tezgahı ve alın kaplama", desc: "Ölçüye özel mutfak tezgahı üretimi, kesim ve montaj. Alın kaplama dahil anahtar teslim çözüm." },
  { title: "Banyo tezgahı", desc: "Mermer, granit ve kuvars banyo tezgahları. Lavabo açılımı ve kenar profili dahil." },
  { title: "Merdiven basamakları", desc: "İç ve dış mekan merdiven basamak, rıht ve süpürgelik uygulamaları." },
  { title: "Pencere ve balkon parapetleri", desc: "Doğal taş pencere denizlikleri ve balkon parapetleri." },
  { title: "Şömine kaplama", desc: "Mermer ve doğal taş şömine kaplama ve dekoratif işler." },
  { title: "Mezar ve özel işler", desc: "Mezar yapımı, anıt ve özel tasarım doğal taş projeleri." },
  { title: "Havuz uygulamaları", desc: "Havuz çevresi ve iç kaplama doğal taş uygulamaları." },
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
