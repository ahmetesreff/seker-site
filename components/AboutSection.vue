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
        <component :is="props.titleTag" class="section-title">Hakkımızda</component>
        <p class="section-subtitle">
          Şeker Mermer İnş. San. ve Tic. Ltd. Şti, 1993 yılından bu yana
          Trabzon ve çevre illerde mermer ve granit imalatında hizmet verir.
        </p>
      </div>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <p>
          Firmamız Aydın Yılmaz tarafından mermer ve granit imalatı üzerine 1993 yılında
          Trabzon'da kurulmuştur. Kuruluş tarihinden itibaren üretim kapasitesini artırarak
          bölgedeki kurumsal ve profesyonel projelere hizmet sunmaktayız.
        </p>
        <p>
          Deneyimli kadromuzla iş merkezleri, yapı ve sanayi inşaatları, daireler, mutfak
          tezgahları, mezarlık, şömine ve mermer pano uygulamalarında üretim ve montaj
          süreçlerini yönetiyoruz.
        </p>
        <p>
          Hedefimiz; kaliteli hizmet vererek müşteri memnuniyetini sürekli geliştirmek ve
          mermer granit sektöründe bölgemizi markamızla birlikte daha iyi tanıtmaktır.
        </p>
      </div>
      <div class="about-panel">
        <div class="about-card">
          <span class="card-title">Kurumsal deneyim</span>
          <span class="card-value">30+ yıl</span>
          <span class="card-meta">Trabzon merkezli</span>
        </div>
        <div class="about-card">
          <span class="card-title">Üretim ve montaj</span>
          <span class="card-value">Mermer + Granit</span>
          <span class="card-meta">Kurumsal projeler</span>
        </div>
        <div class="about-card">
          <span class="card-title">Ekip ve lojistik</span>
          <span class="card-value">6 personel</span>
          <span class="card-meta">3 araç ile servis</span>
        </div>
      </div>
    </div>
  </section>
</template>
