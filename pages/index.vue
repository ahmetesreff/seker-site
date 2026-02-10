<script setup lang="ts">
const { fetchGalleryItems, strapiUrl } = useStrapi();
const { data: items } = await useAsyncData("gallery-items", fetchGalleryItems);
const itemCount = computed(() => items.value?.length ?? 0);

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
  <div>
    <section class="hero section">
      <div>
        <span class="eyebrow">1993'ten beri Trabzon</span>
        <h1 class="hero-title">Doğal taş projelerinde güvenilir çözüm.</h1>
        <p class="hero-lede">
          Mermer, granit ve kuvars uygulamalarını kurumsal ve konut projelerinde
          titizlikle üretir, uygularız.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Teklif al</a>
          <a href="#gallery" class="btn btn-ghost">Galeriyi gör</a>
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

      <div class="hero-visual" aria-hidden="true">
        <div class="tile tile-a"></div>
        <div class="tile tile-b"></div>
        <div class="tile tile-c"></div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Hakkımızda</h2>
          <p class="section-subtitle">
            Şeker Mermer İnş. San. ve Tic. Ltd. Şti, 1993 yılından bu yana
            Trabzon ve çevre illerde mermer ve granit imalatında hizmet verir.
          </p>
        </div>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            Firmamız Aydın Yılmaz tarafından mermer ve granit imalatı üzerine
            1993 yılında Trabzon'da kurulmuştur. Kuruluş tarihinden itibaren
            üretim kapasitesini artırarak bölgedeki kurumsal ve profesyonel
            projelere hizmet sunmaktayız.
          </p>
          <p>
            Deneyimli kadromuzla iş merkezleri, yapı ve sanayi inşaatları,
            daireler, mutfak tezgahları, mezarlık, şömine ve mermer pano
            uygulamalarında üretim ve montaj süreçlerini yönetiyoruz.
          </p>
          <p>
            Hedefimiz; kaliteli hizmet vererek müşteri memnuniyetini sürekli
            geliştirmek ve mermer granit sektöründe bölgemizi markamızla
            birlikte daha iyi tanıtmaktır.
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

    <section id="services" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Hizmetler</h2>
          <p class="section-subtitle">
            Projeye uygun doğal taş seçimi, üretim ve uygulama süreçlerini
            anahtar teslim yürütüyoruz.
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

    <section id="products" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Granit Koleksiyonu</h2>
          <p class="section-subtitle">
            Seçili granit desenleri ve uygulama örnekleri.
          </p>
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
    </section>

    <section id="gallery" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Galeriler</h2>
          <p class="section-subtitle">
            Seçili işler ve referanslar. Her galeri, kendi detay sayfasında
            tüm görselleriyle yer alır.
          </p>
        </div>
        <span class="hero-meta">{{ itemCount }} toplam</span>
      </div>

      <div class="gallery-grid">
        <NuxtLink
          v-for="(item, index) in items"
          :key="item.id"
          :to="`/gallery/${item.id}`"
          class="gallery-card"
          :style="{ '--i': index }"
        >
          <div class="gallery-media">
            <img
              :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
              :alt="item.attributes.title"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="gallery-body">
            <h3 class="gallery-title">{{ item.attributes.title }}</h3>
            <span class="gallery-cta">Galeriyi gör &rarr;</span>
          </div>
        </NuxtLink>
      </div>

      <div v-if="!items?.length" class="empty-state">
        Henüz içerik yok. Strapi üzerinden yeni galeri ekleyebilirsiniz.
      </div>
    </section>

    <section id="brands" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Markalar</h2>
          <p class="section-subtitle">
            İş ortaklarımız ve markalarımızı burada listeliyoruz.
          </p>
        </div>
      </div>

      <div class="brands-grid">
        <div class="brand-chip">Marka 1</div>
        <div class="brand-chip">Marka 2</div>
        <div class="brand-chip">Marka 3</div>
        <div class="brand-chip">Marka 4</div>
        <div class="brand-chip">Marka 5</div>
        <div class="brand-chip">Marka 6</div>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div class="section-head">
        <div>
          <h2 class="section-title">İletişim</h2>
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
          <a href="https://www.sekermermer.com" class="contact-link">
            www.sekermermer.com
          </a>
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
        <div class="contact-card contact-highlight">
          <h3>Hızlı teklif</h3>
          <p>
            Projenizi kısaca anlatın, uygun malzeme ve fiyatlandırmayı
            birlikte planlayalım.
          </p>
          <a href="mailto:info@sekermermer.com" class="btn btn-primary">
            Teklif iste
          </a>
        </div>
        <div class="contact-card map-card">
          <h3>Harita</h3>
          <div class="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.748171387792!2d39.751754877662904!3d40.997586871352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c6a77a2615d%3A0x20662aa8b69aff!2s%C5%9Eeker%20Mermer!5e1!3m2!1str!2str!4v1770710156484!5m2!1str!2str"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Şeker Mermer harita"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
