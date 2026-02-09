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
        <h1 class="hero-title">Dogal tas projelerinde guvenilir cozum.</h1>
        <p class="hero-lede">
          Mermer, granit ve kuvars uygulamalarini kurumsal ve konut projelerinde
          titizlikle uretir, uygulariz.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Teklif al</a>
          <a href="#gallery" class="btn btn-ghost">Galeriyi gor</a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-label">Kurulus</span>
            <span class="stat-value">1993</span>
          </div>
          <div class="stat">
            <span class="stat-label">Ekip</span>
            <span class="stat-value">6 personel</span>
          </div>
          <div class="stat">
            <span class="stat-label">Saha</span>
            <span class="stat-value">3 arac</span>
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
          <h2 class="section-title">Hakkimizda</h2>
          <p class="section-subtitle">
            Seker Mermer Ins. San. ve Tic. Ltd. Sti, 1993 yilindan bu yana
            Trabzon ve cevre illerde mermer ve granit imalatinda hizmet verir.
          </p>
        </div>
      </div>

      <div class="about-grid">
        <div class="about-text">
          <p>
            Firmamiz Aydin Yilmaz tarafindan mermer ve granit imalati uzerine
            1993 yilinda Trabzon'da kurulmustur. Kurulus tarihinden itibaren
            uretim kapasitesini arttirarak bolgedeki kurumsal ve profesyonel
            projelere hizmet sunmaktayiz.
          </p>
          <p>
            Deneyimli kadromuzla is merkezleri, yapi ve sanayi insaatlari,
            daireler, mutfak tezgahlari, mezarlik, somine ve mermer pano
            uygulamalarinda uretim ve montaj sureclerini yonetiyoruz.
          </p>
          <p>
            Hedefimiz; kaliteli hizmet vererek musteri memnuniyetini surekli
            gelistirmek ve mermer granit sektorunde bolgemizi markamizla
            birlikte daha iyi tanitmaktir.
          </p>
        </div>
        <div class="about-panel">
          <div class="about-card">
            <span class="card-title">Kurumsal deneyim</span>
            <span class="card-value">30+ yil</span>
            <span class="card-meta">Trabzon merkezli</span>
          </div>
          <div class="about-card">
            <span class="card-title">Uretim ve montaj</span>
            <span class="card-value">Mermer + Granit</span>
            <span class="card-meta">Kurumsal projeler</span>
          </div>
          <div class="about-card">
            <span class="card-title">Ekip ve lojistik</span>
            <span class="card-value">6 personel</span>
            <span class="card-meta">3 arac ile servis</span>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Hizmetler</h2>
          <p class="section-subtitle">
            Projeye uygun dogal tas secimi, uretim ve uygulama sureclerini
            anahtar teslim yurutuyoruz.
          </p>
        </div>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <h3>Mermer ve granit imalati</h3>
          <p>Kesim, sekillendirme ve montaj surecleri.</p>
        </div>
        <div class="service-card">
          <h3>Kuvars yuzey uygulamalari</h3>
          <p>Mutfak, banyo ve ic mekan cozumleri.</p>
        </div>
        <div class="service-card">
          <h3>Mutfak tezgahlari</h3>
          <p>Olcuye ozel uretim ve uygulama.</p>
        </div>
        <div class="service-card">
          <h3>Banyo ve zemin kaplamalari</h3>
          <p>Dayanikli, uzun omurlu kaplama isleri.</p>
        </div>
        <div class="service-card">
          <h3>Mermer pano ve somine</h3>
          <p>Dekoratif ve kurumsal alan uygulamalari.</p>
        </div>
        <div class="service-card">
          <h3>Mezarlik ve ozel isler</h3>
          <p>Geleneksel ve modern tasarimlar.</p>
        </div>
      </div>
    </section>

    <section id="products" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Granit Koleksiyonu</h2>
          <p class="section-subtitle">
            Secli granit desenleri ve uygulama ornekleri.
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
            Secli isler ve referanslar. Her galeri, kendi detay sayfasinda
            tum gorselleriyle yer alir.
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
            <span class="gallery-cta">Galeriyi gor &rarr;</span>
          </div>
        </NuxtLink>
      </div>

      <div v-if="!items?.length" class="empty-state">
        Henuz icerik yok. Strapi uzerinden yeni galeri ekleyebilirsiniz.
      </div>
    </section>

    <section id="brands" class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">Markalar</h2>
          <p class="section-subtitle">
            Is ortaklarimiz ve markalarimizi burada listeliyoruz.
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
          <h2 class="section-title">Iletisim</h2>
          <p class="section-subtitle">
            Projeleriniz icin teklif almak isterseniz bize ulasin.
          </p>
        </div>
      </div>

      <div class="contact-grid">
        <div class="contact-card">
          <h3>Adres</h3>
          <p>Demirkirlar Is Merkezi No:64</p>
          <p>Degirmendere, Trabzon / TURKIYE</p>
          <a href="https://www.sekermermer.com" class="contact-link">
            www.sekermermer.com
          </a>
        </div>
        <div class="contact-card">
          <h3>Iletisim</h3>
          <p>
            Telefon:
            <a href="tel:+904623253601">+90 462 325 36 01</a>
          </p>
          <p>
            Fax:
            <a href="tel:+904623281215">+90 462 328 12 15</a>
          </p>
          <p>
            E-posta:
            <a href="mailto:info@sekermermer.com">info@sekermermer.com</a>
          </p>
        </div>
        <div class="contact-card contact-highlight">
          <h3>Hizli teklif</h3>
          <p>
            Projenizi kisaca anlatin, uygun malzeme ve fiyatlandirmayi
            birlikte planlayalim.
          </p>
          <a href="mailto:info@sekermermer.com" class="btn btn-primary">
            Teklif iste
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
