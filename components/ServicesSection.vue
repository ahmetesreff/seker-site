<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
  }>(),
  { titleTag: "h2" }
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
      <div class="service-card">
        <h3>Mermer ve granit imalatı</h3>
        <p>Kesim, şekillendirme ve montaj süreçleri.</p>
      </div>
      <div class="service-card">
        <h3>Kuvars yüzey uygulamaları</h3>
        <p>Mutfak, banyo ve iç mekan çözümleri.</p>
      </div>
      <div class="service-card">
        <h3>Mutfak tezgahları</h3>
        <p>Ölçüye özel üretim ve uygulama.</p>
      </div>
      <div class="service-card">
        <h3>Banyo ve zemin kaplamaları</h3>
        <p>Dayanıklı, uzun ömürlü kaplama işleri.</p>
      </div>
      <div class="service-card">
        <h3>Mermer pano ve şömine</h3>
        <p>Dekoratif ve kurumsal alan uygulamaları.</p>
      </div>
      <div class="service-card">
        <h3>Mezarlık ve özel işler</h3>
        <p>Geleneksel ve modern tasarımlar.</p>
      </div>
    </div>
  </section>
</template>
