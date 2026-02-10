import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const publicDir = resolve(rootDir, "public");

const siteUrl = (process.env.SITE_URL || "https://devbar.com").replace(/\/$/, "");
const strapiUrl = (process.env.STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

const today = new Date().toISOString();

async function fetchGalleryItems() {
  const url = new URL(`${strapiUrl}/api/gallery-items`);
  url.searchParams.set("pagination[pageSize]", "100");
  url.searchParams.set("fields[0]", "updatedAt");
  url.searchParams.set("sort[0]", "updatedAt:desc");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status}`);
  }

  const payload = await res.json();
  return Array.isArray(payload?.data) ? payload.data : [];
}

function buildUrlEntry(loc, lastmod) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    "    <changefreq>weekly</changefreq>",
    "    <priority>0.7</priority>",
    "  </url>",
  ].join("\n");
}

async function run() {
  await mkdir(publicDir, { recursive: true });

  let galleryItems = [];
  try {
    galleryItems = await fetchGalleryItems();
  } catch (error) {
    console.warn(`[sitemap] Gallery fetch failed, continuing with homepage only: ${error.message}`);
  }

  const urls = [
    buildUrlEntry(`${siteUrl}/`, today),
    ...galleryItems.map((item) =>
      buildUrlEntry(
        `${siteUrl}/gallery/${item.id}`,
        item?.attributes?.updatedAt || today
      )
    ),
  ];

  const xml = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
    ...urls,
    "</urlset>",
    "",
  ].join("\n");

  await writeFile(resolve(publicDir, "sitemap.xml"), xml, "utf8");
  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
  await writeFile(resolve(publicDir, "robots.txt"), robots, "utf8");
  console.log(`[sitemap] Generated ${urls.length} urls`);
}

run().catch((error) => {
  console.error(`[sitemap] Failed: ${error.message}`);
  process.exit(1);
});
