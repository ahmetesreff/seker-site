# sekermermer.com.tr

Şeker Mermer'in tek sayfalık statik sitesi. Derleme adımı ve CMS yok: `site/` klasörü olduğu gibi yayınlanır.

## Yayın

- **Cloudflare Pages**, GitHub bağlantılı. `main` dalına her push otomatik yayınlanır.
- Pages ayarları: framework yok, build komutu boş, çıktı klasörü `site`.
- `site/_headers` güvenlik başlıklarını ekler ve `*.pages.dev` kopyasını `noindex` yapar.
- `site/_redirects` eski Nuxt adreslerini (`/iletisim`, `/urunler`…) sayfadaki bölümlere 301 ile yönlendirir.
- `site/404.html` bilinmeyen adreslerde gerçek 404 döndürür.

## Yapı

```
site/
  index.html        tüm içerik (taşlar, uygulamalar, hizmetler, markalar, hakkımızda, iletişim)
  site.css          renk ve yazı tipi değişkenleri en üstte
  img/tas/          taş görselleri, 400×400 webp
  img/uygulama/     uygulama fotoğrafları, 1200×900 ve 800×600 (srcset) webp
  img/marka/        marka logoları
  img/og.jpg        paylaşım önizlemesi (1200×630)
  fonts/            Barlow ve Barlow Condensed (OFL), yerelde sunulur: Google'a istek gitmez
```

Taş ya da marka eklemek için `index.html`'de ilgili listeye bir `<li>` eklemek yeterli. Sekmelerdeki ve başlıklardaki sayılar listeden kendiliğinden hesaplanır.

## Kontrol

Yayın öncesi Lighthouse (yerelde `npx wrangler pages dev site`): telefon 98/100/100/100, masaüstü 100/100/100/100 (2026-11-08).

## İçerik kuralları

- `www.sekermermer.com` firmaya ait değil: siteye bağlantı verilmez. `info@sekermermer.com` firma isteğiyle iletişimde duruyor.
- Doğrulanmamış iddia (ödül, sertifika, "en iyi" vb.) yazılmaz.
- Adres, telefon ve WhatsApp numarası Google İşletme Profili ile aynı tutulmalı.

## Geçmiş

Önceki Nuxt 3 + Strapi sürümü `nuxt-son` etiketinde duruyor.
