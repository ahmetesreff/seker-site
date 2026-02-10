<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleTag?: "h1" | "h2";
    compact?: boolean;
  }>(),
  { titleTag: "h2", compact: false }
);
</script>

<template>
  <section class="section contact">
    <div class="section-head">
      <div>
        <component :is="props.titleTag" class="section-title">İletişim</component>
        <p class="section-subtitle">
          Projeleriniz için teklif almak isterseniz bize ulaşın.
        </p>
      </div>
    </div>

    <div class="contact-grid">
      <div class="contact-card">
        <h3>Adres</h3>
        <p>Demirkırlar İş Merkezi No:64</p>
        <p>Değirmendere, Trabzon / TÜRKİYE</p>
        <a href="https://www.sekermermer.com" class="contact-link">www.sekermermer.com</a>
      </div>
      <div class="contact-card">
        <h3>İletişim</h3>
        <p>
          Telefon:
          <a href="tel:+904623253601">+90 462 325 36 01</a>
        </p>
        <p>
          Faks:
          <a href="tel:+904623281215">+90 462 328 12 15</a>
        </p>
        <p>
          E-posta:
          <a href="mailto:info@sekermermer.com">info@sekermermer.com</a>
        </p>
      </div>
      <div v-if="!props.compact" class="contact-card contact-highlight">
        <h3>Hızlı teklif</h3>
        <p>
          Projenizi kısaca anlatın, uygun malzeme ve fiyatlandırmayı birlikte planlayalım.
        </p>
        <a href="mailto:info@sekermermer.com" class="btn btn-primary">
          Teklif iste
        </a>
      </div>
    </div>

    <div class="contact-map">
      <h3>Harita</h3>
      <div class="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.748171387792!2d39.751754877662904!3d40.997586871352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c6a77a2615d%3A0x20662aa8b69aff!2s%C5%9Eeker%20Mermer!5e1!3m2!1str!2str!4v1770710156484!5m2!1str!2str"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Şeker Mermer harita"
        ></iframe>
      </div>
      <div class="map-actions">
        <a
          class="btn btn-ghost"
          href="https://www.google.com/maps/dir/?api=1&destination=%C5%9Eeker%20Mermer%20De%C4%9Firmendere%20Trabzon"
          target="_blank"
          rel="noreferrer"
        >
          Yol tarifi al
        </a>
      </div>
    </div>

    <div v-if="props.compact" class="section-more">
      <NuxtLink to="/iletisim">Detaylı iletişim &rarr;</NuxtLink>
    </div>
  </section>
</template>
