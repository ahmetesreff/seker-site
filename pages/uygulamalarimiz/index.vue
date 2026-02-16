<script setup lang="ts">
import { QP_STONE, QP_SERVICE } from "~/composables/useGalleryFilters";

useHead({
  title: "Uygulamalarımız | Şeker Mermer",
  meta: [
    {
      name: "description",
      content:
        "Şeker Mermer uygulamaları: tamamlanan mermer, granit ve kuvars tezgah projeleri. Mutfak, banyo ve cephe uygulama örnekleri.",
    },
  ],
});

const route = useRoute();
const router = useRouter();

const activeStone = computed(() => (route.query[QP_STONE] as string) || null);
const activeService = computed(() => (route.query[QP_SERVICE] as string) || null);

function onStoneChange(value: string | null) {
  const query = { ...route.query };
  if (value) {
    query[QP_STONE] = value;
  } else {
    delete query[QP_STONE];
  }
  router.replace({ query });
}

function onServiceChange(value: string | null) {
  const query = { ...route.query };
  if (value) {
    query[QP_SERVICE] = value;
  } else {
    delete query[QP_SERVICE];
  }
  router.replace({ query });
}
</script>

<template>
  <div>
    <GallerySection
      title-tag="h1"
      :show-count="true"
      :filter-stone="activeStone"
      :filter-service="activeService"
    >
      <template #filters>
        <GalleryFilters
          :active-stone="activeStone"
          :active-service="activeService"
          @update:stone="onStoneChange"
          @update:service="onServiceChange"
        />
      </template>
    </GallerySection>
  </div>
</template>
