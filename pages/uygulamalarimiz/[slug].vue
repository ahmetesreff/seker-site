<script setup lang="ts">
import { stoneLabel, serviceLabel } from "~/composables/useGalleryFilters";

const route = useRoute();
const { fetchGalleryItemBySlug, strapiUrl } = useStrapi();

const { data: item } = await useAsyncData(
  `gallery-item-${route.params.slug}`,
  () => fetchGalleryItemBySlug(route.params.slug as string)
);

const embedUrl = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|[?&]v=)([\w-]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
};

if (!item.value) {
  throw createError({ statusCode: 404, message: "İçerik bulunamadı" });
}

useHead({
  title: `${item.value.attributes.title} - Şeker Mermer`,
  meta: [
    {
      name: "description",
      content:
        item.value.attributes.description ||
        `${item.value.attributes.title} - Şeker Mermer mermer ve granit uygulama örneği.`,
    },
  ],
});
</script>

<template>
  <div v-if="item" class="detail">
    <div class="detail-header">
      <NuxtLink to="/uygulamalarimiz" class="back-pill">&larr; Geri</NuxtLink>
      <span class="eyebrow">Uygulamalarımız</span>
      <h1 class="detail-title">{{ item.attributes.title }}</h1>
      <div v-if="item.attributes.stoneType || item.attributes.serviceType" class="detail-tags">
        <NuxtLink
          v-if="item.attributes.stoneType"
          :to="`/uygulamalarimiz?tas=${item.attributes.stoneType}`"
          class="detail-tag"
        >
          {{ stoneLabel(item.attributes.stoneType) }}
        </NuxtLink>
        <NuxtLink
          v-if="item.attributes.serviceType"
          :to="`/uygulamalarimiz?hizmet=${item.attributes.serviceType}`"
          class="detail-tag"
        >
          {{ serviceLabel(item.attributes.serviceType) }}
        </NuxtLink>
      </div>
    </div>

    <p v-if="item.attributes.description" class="detail-description">
      {{ item.attributes.description }}
    </p>

    <div class="detail-cover">
      <img
        :src="strapiUrl(item.attributes.coverImage.data.attributes.url)"
        :alt="item.attributes.title"
      />
    </div>

    <section v-if="item.attributes.videoUrl" class="detail-section">
      <h2>Video</h2>
      <div class="video-frame">
        <iframe
          :src="embedUrl(item.attributes.videoUrl)"
          title="Uygulama videosu"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>

    <section
      v-if="item.attributes.images.data?.length"
      class="detail-section"
    >
      <h2>Görseller</h2>
      <div class="detail-grid">
        <img
          v-for="img in item.attributes.images.data"
          :key="img.attributes.url"
          :src="strapiUrl(img.attributes.url)"
          :alt="img.attributes.alternativeText || item.attributes.title"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  </div>
</template>
