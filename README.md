# sekermermer.com.tr — Site

Nuxt 3 SSG statik site. Strapi CMS'den veri çekerek build sırasında HTML üretir.

## Gereksinimler

- Node.js 20 LTS
- npm 9+

## Yerel Geliştirme

```bash
# 1. Repo'yu klonla
git clone git@github.com:ahmetesreff/seker-site.git
cd seker-site

# 2. Env dosyası
cp .env.example .env
# STRAPI_URL=http://localhost:1337 (yerel CMS için)

# 3. Bağımlılıkları yükle
npm install

# 4. Dev server
npm run dev
```

## Build & Generate

```bash
# Statik site üret
STRAPI_URL=https://admin.sekermermer.com.tr npm run generate

# Çıktı: .output/public/
```

## Deploy

GitHub Actions otomatik deploy yapar:
- `main` branch'ine push yapıldığında
- Strapi'de içerik yayınlandığında (webhook → repository_dispatch)
- Manuel olarak (workflow_dispatch)

### GitHub Repo Secrets

| Secret | Açıklama |
|---|---|
| `DEPLOY_HOST` | VPS IP adresi |
| `DEPLOY_USER` | SSH kullanıcısı (`deploy`) |
| `DEPLOY_SSH_KEY` | SSH private key |
| `DEPLOY_PATH` | Hedef dizin (`/var/www/seker-site`) |
| `STRAPI_URL` | Strapi API URL (`https://admin.sekermermer.com.tr`) |
| `SITE_URL` | Site URL (`https://sekermermer.com.tr`) |

### SSH Key Üretme

```bash
# Lokal makinede
ssh-keygen -t ed25519 -f deploy_key -C "github-actions-deploy"

# Public key'i VPS'e ekle
cat deploy_key.pub
# → VPS'te /home/deploy/.ssh/authorized_keys dosyasına ekle

# Private key'i GitHub secret olarak ekle
cat deploy_key
# → GitHub repo → Settings → Secrets → DEPLOY_SSH_KEY
```

## Yapı

```
seker-site/
├── .github/workflows/
│   └── deploy.yml            # CI/CD pipeline
├── app.vue
├── nuxt.config.ts
├── package.json
├── .env.example
├── composables/
│   ├── useStrapi.ts          # Strapi API composable
│   └── useGalleryItemsData.ts
├── components/
│   ├── HeroSection.vue       # Ana slider (Strapi görselleri + fallback)
│   └── GallerySection.vue    # Galeri grid
└── pages/
    ├── index.vue             # Ana sayfa
    └── galeri/
        └── [id].vue          # Galeri detay sayfası
```

## Akış

```
Strapi Publish
    ↓
webhook-relay (X-Hook-Secret doğrulama)
    ↓
GitHub API repository_dispatch
    ↓
GitHub Actions: npm run generate
    ↓
rsync → VPS:/var/www/seker-site
    ↓
nginx reload
    ↓
sekermermer.com.tr güncellendi
```

## Sunucu Bilgileri

- **nginx root**: `/var/www/seker-site` — bu dizin `deploy` kullanıcısına ait olmalı
- **Strapi**: `localhost:1337` — nginx reverse proxy ile `admin.sekermermer.com.tr` üzerinden erişilir
- **Cloudflare**: DNS ve SSL için kullanılıyor, cache kuralı yok

## Sorun Giderme (2026-02-11)

### Deploy çalışıyor ama site güncellenmiyor

**Kök neden:** İki farklı yol problemi tespit edildi:

1. **`DEPLOY_PATH` yanlış dizini gösteriyordu** — Secret `/var/www/devbar-site` olarak ayarlanmıştı,
   ancak nginx `sekermermer.com.tr` için `/var/www/seker-site` dizinini kullanıyor.
   rsync dosyaları yanlış dizine deploy ediyordu, nginx ise eski dosyaları sunmaya devam ediyordu.

2. **`STRAPI_URL` tanımlı değildi** — Secret boş olduğu için `nuxt.config.ts`'deki
   fallback değer (`http://localhost:1337`) kullanılıyordu. Bu yüzden tüm Strapi görsel URL'leri
   `http://localhost:1337/uploads/...` olarak render ediliyordu ve ziyaretçilerin tarayıcısında yüklenmiyordu.

**Ek sorun:** `/var/www/seker-site` dizini `esref` kullanıcısına aitti, `deploy` kullanıcısının
yazma izni yoktu. `chown -R deploy:deploy /var/www/seker-site/` ile düzeltildi.

**Çözüm:**
```bash
# GitHub secrets güncellendi:
gh secret set DEPLOY_PATH --body "/var/www/seker-site"
gh secret set STRAPI_URL --body "https://admin.sekermermer.com.tr"

# Dizin izinleri düzeltildi:
sudo chown -R deploy:deploy /var/www/seker-site/
```
