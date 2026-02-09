# devbar.bar — Site

Nuxt 3 SSG statik site. Strapi CMS'den veri cekerek build sirasinda HTML uretir.

## Gereksinimler

- Node.js 20 LTS
- npm 9+

## Yerel Gelistirme

```bash
# 1. Repo'yu klonla
git clone git@github.com:OWNER/site.git
cd site

# 2. Env dosyasi
cp .env.example .env
# STRAPI_URL=http://localhost:1337 (yerel CMS icin)

# 3. Bagimliliklari yukle
npm install

# 4. Dev server
npm run dev
```

## Build & Generate

```bash
# Statik site uret
STRAPI_URL=https://admin.devbar.bar npm run generate

# Cikti: .output/public/
```

## Deploy

GitHub Actions otomatik deploy yapar:
- `main` branch'ine push yapildiginda
- Strapi'de icerik yayinlandiginda (webhook → repository_dispatch)
- Manuel olarak (workflow_dispatch)

### GitHub Repo Secrets

| Secret | Aciklama |
|---|---|
| `DEPLOY_HOST` | VPS IP adresi |
| `DEPLOY_USER` | SSH kullanicisi (deploy) |
| `DEPLOY_SSH_KEY` | SSH private key |
| `DEPLOY_PATH` | Hedef dizin (`/var/www/devbar-site`) |
| `STRAPI_URL` | Strapi API URL (`https://admin.devbar.bar`) |

### SSH Key Uretme

```bash
# Lokal makinede
ssh-keygen -t ed25519 -f deploy_key -C "github-actions-deploy"

# Public key'i VPS'e ekle
cat deploy_key.pub
# → VPS'te /home/deploy/.ssh/authorized_keys dosyasina ekle

# Private key'i GitHub secret olarak ekle
cat deploy_key
# → GitHub repo → Settings → Secrets → DEPLOY_SSH_KEY
```

## Yapi

```
site/
├── .github/workflows/
│   └── deploy.yml            # CI/CD pipeline
├── app.vue
├── nuxt.config.ts
├── package.json
├── .env.example
├── composables/
│   └── useStrapi.ts          # Strapi API composable
└── pages/
    ├── index.vue             # Ana sayfa — galeri listesi
    └── gallery/
        └── [id].vue          # Galeri detay sayfasi
```

## Akis

```
Strapi Publish
    ↓
webhook-relay (X-Hook-Secret dogrulama)
    ↓
GitHub API repository_dispatch
    ↓
GitHub Actions: npm run generate
    ↓
rsync → VPS:/var/www/devbar-site
    ↓
nginx reload
    ↓
devbar.bar guncellendi
```
