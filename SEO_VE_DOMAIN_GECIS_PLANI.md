# SEO ve Domain Geçiş Planı — sekermermer.com

> Bu plan `sekermermer.com` domain'i alındığında uygulanacaktır.
> Tüm SEO düzeltmeleri ve domain birleştirme işlemleri bu dokümanda belgelenmiştir.

---

## Domain Stratejisi

- **Birincil domain:** `sekermermer.com` (yıllardır Google'da indexli, mevcut SEO otoritesi var)
- **İkincil domain:** `sekermermer.com.tr` (301 redirect ile `.com`'a yönlendirilecek)

**Neden `.com` birincil?**
- Google'da yıllardır yer alıyor, backlink ve otorite birikmiş
- 301 redirect ile otorite aktarımı mümkün ama direkt kullanmak daha temiz ve hızlı
- `.com.tr`'nin kısa süredir biriktirdiği değer `.com`'a 301 ile kolayca aktarılır

### sekermermer.com alındığında yapılacaklar

1. Domain'in DNS'ini Cloudflare'e ekle, sunucu IP'sine yönlendir
2. Sunucuda SSL sertifikası al:
   ```bash
   sudo certbot --nginx -d sekermermer.com -d www.sekermermer.com
   ```
3. Nginx'te `sekermermer.com` için site bloğunu oluştur (mevcut `seker-site` root'unu kullan):
   ```nginx
   server {
       server_name sekermermer.com www.sekermermer.com;
       root /var/www/seker-site;
       index index.html;

       location / {
           try_files $uri $uri/index.html $uri.html /200.html;
       }

       location ~* \.(js|css|png|jpg|jpeg|webp|avif|gif|ico|svg|woff2?)$ {
           expires 30d;
           add_header Cache-Control "public, immutable";
       }

       listen 443 ssl;
       ssl_certificate /etc/letsencrypt/live/sekermermer.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/sekermermer.com/privkey.pem;
   }
   ```
4. Mevcut `sekermermer.com.tr` bloğunu 301 redirect'e çevir:
   ```nginx
   server {
       server_name sekermermer.com.tr www.sekermermer.com.tr;
       listen 443 ssl;
       ssl_certificate /etc/letsencrypt/live/sekermermer.com.tr/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/sekermermer.com.tr/privkey.pem;
       return 301 https://sekermermer.com$request_uri;
   }
   ```
5. Tüm kod/config'lerdeki domain referanslarını `sekermermer.com` olarak güncelle
6. Google Search Console'da `sekermermer.com` doğrula ve sitemap gönder
7. Search Console'da `.com.tr` için "Adres Değişikliği" aracıyla `.com`'a yönlendirmeyi bildir

> **Not:** `.com.tr` → `.com` 301 redirect ile `.com.tr`'nin kısa süredir biriktirdiği değer de `.com`'a aktarılır. `.com`'un mevcut otoritesi doğrudan korunur.

---

## SEO Düzeltmeleri

### 1. Kritik: Domain referanslarını düzelt

Site `devbar.bar` projesinden fork edilmiş, hardcoded domain referansları hala eski.

#### `.env.example`
```
STRAPI_URL=https://admin.sekermermer.com.tr
SITE_URL=https://sekermermer.com
```

#### `scripts/generate-sitemap.mjs` (satır 9)
```js
// Eski:
const siteUrl = (process.env.SITE_URL || "https://devbar.com").replace(/\/$/, "");
// Yeni:
const siteUrl = (process.env.SITE_URL || "https://sekermermer.com").replace(/\/$/, "");
```

#### `public/robots.txt`
`generate-sitemap.mjs` tarafından otomatik üretiliyor — script düzeltilince düzelir.
Ama local'deki statik dosyayı da güncelle:
```
User-agent: *
Allow: /

Sitemap: https://sekermermer.com/sitemap.xml
```

#### `components/ContactSection.vue` (satır 28)
```
Eski: href="https://www.sekermermer.com"  →  text: www.sekermermer.com
Yeni: href="https://sekermermer.com"      →  text: sekermermer.com
```

#### GitHub Secret: `SITE_URL`
```bash
gh secret set SITE_URL --repo ahmetesreff/seker-site --body "https://sekermermer.com"
```

> **Not:** `STRAPI_URL` admin.sekermermer.com.tr olarak kalır — CMS'in domain'i değişmiyor.

---

### 2. Open Graph ve Twitter Card tags

`nuxt.config.ts` > `app.head.meta` bloğuna eklenecek:
```ts
{ property: "og:type", content: "website" },
{ property: "og:locale", content: "tr_TR" },
{ property: "og:site_name", content: "Şeker Mermer" },
{ property: "og:title", content: "Şeker Mermer | Trabzon Mermer ve Granit İmalatı" },
{ property: "og:description", content: "Trabzon mermer firması Şeker Mermer: granit tezgah imalatı, kuvars mutfak tezgahı, banyo, merdiven ve cephe uygulamaları. 1993'ten beri üretim ve montaj." },
{ property: "og:image", content: "https://sekermermer.com/logo.webp" },
{ property: "og:url", content: "https://sekermermer.com" },
{ name: "twitter:card", content: "summary" },
```

`nuxt.config.ts` > `app.head.link` bloğuna eklenecek:
```ts
{ rel: "canonical", href: "https://sekermermer.com" },
```

---

### 3. Sayfa title'larını iyileştir

Mevcut title'lar çok kısa (22-29 karakter). İdeal: 50-60 karakter.

| Sayfa | Mevcut Title | Yeni Title |
|-------|-------------|-----------|
| hakkimizda | Hakkımızda \| Şeker Mermer | Hakkımızda - Trabzon Mermer Firması \| Şeker Mermer |
| hizmetler | Hizmetler \| Şeker Mermer | Hizmetlerimiz - Mermer Kesim, Üretim ve Montaj \| Şeker Mermer |
| urunler | Ürünler \| Şeker Mermer | Ürünler - Granit ve Doğal Taş Koleksiyonu \| Şeker Mermer |
| galeri | Galeri \| Şeker Mermer | Galeri - Mermer ve Granit Uygulama Örnekleri \| Şeker Mermer |
| markalar | Markalar \| Şeker Mermer | Markalar - Belenco, Çimstone, Kromevye \| Şeker Mermer |
| iletisim | İletişim \| Şeker Mermer | İletişim - Adres ve Teklif \| Şeker Mermer |

Her sayfaya ayrıca OG tags ve canonical URL eklenecek.

---

### 4. Galeri detay sayfaları (`pages/galeri/[id].vue`)

Şu anda sadece title var, description ve OG tags eksik:
```ts
useHead({
  title: `${item.value.attributes.title} | Galeri - Şeker Mermer`,
  meta: [
    {
      name: "description",
      content: `${item.value.attributes.title} - Şeker Mermer mermer ve granit uygulama örneği.`,
    },
    { property: "og:title", content: item.value.attributes.title },
    { property: "og:description", content: `${item.value.attributes.title} - Şeker Mermer galeri` },
    { property: "og:image", content: strapiUrl(item.value.attributes.coverImage.data.attributes.url) },
    { property: "og:type", content: "article" },
  ],
  link: [
    { rel: "canonical", href: `https://sekermermer.com/galeri/${route.params.id}` },
  ],
});
```

---

### 5. JSON-LD Schema Markup (LocalBusiness)

`nuxt.config.ts` > `app.head.script` bloğuna eklenecek:
```ts
script: [
  {
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Şeker Mermer",
      "url": "https://sekermermer.com",
      "logo": "https://sekermermer.com/logo.webp",
      "image": "https://sekermermer.com/logo.webp",
      "description": "Trabzon'da mermer, granit ve kuvars tezgah imalatı, kesim, üretim ve montaj.",
      "foundingDate": "1993",
      "telephone": "+90-462-325-3601",
      "email": "info@sekermermer.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Demirkırlar İş Merkezi No:64, Değirmendere",
        "addressLocality": "Trabzon",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.997587",
        "longitude": "39.751755"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    })
  }
]
```

---

## Değiştirilecek dosyalar (toplam 13)

| # | Dosya | Değişiklik |
|---|-------|-----------|
| 1 | `.env.example` | Domain URL'leri |
| 2 | `scripts/generate-sitemap.mjs` | Fallback URL |
| 3 | `public/robots.txt` | Sitemap URL |
| 4 | `nuxt.config.ts` | OG tags, Twitter Card, canonical, JSON-LD |
| 5 | `components/ContactSection.vue` | Website URL |
| 6 | `pages/index.vue` | OG tags, canonical |
| 7 | `pages/hakkimizda.vue` | Title + OG + canonical |
| 8 | `pages/hizmetler.vue` | Title + OG + canonical |
| 9 | `pages/urunler.vue` | Title + OG + canonical |
| 10 | `pages/galeri/index.vue` | Title + OG + canonical |
| 11 | `pages/galeri/[id].vue` | Description + OG + canonical |
| 12 | `pages/markalar.vue` | Title + OG + canonical |
| 13 | `pages/iletisim.vue` | Title + OG + canonical |

---

## Doğrulama adımları

```bash
# 1. Build al
npm run generate

# 2. Sitemap kontrolü
grep 'sekermermer.com' .output/public/sitemap.xml

# 3. Robots.txt kontrolü
cat .output/public/robots.txt

# 4. OG tags ve JSON-LD kontrolü
grep -E 'og:|canonical|ld\+json' .output/public/index.html

# 5. Deploy tetikle
gh workflow run deploy.yml --repo ahmetesreff/seker-site

# 6. Canlı site doğrulama
curl -s https://sekermermer.com | grep -E 'og:|canonical|ld\+json'
```
