import { computed } from "vue";

export function useGalleryItemsData() {
  const { fetchGalleryItems, strapiUrl } = useStrapi();
  const { data: items } = useAsyncData("gallery-items", fetchGalleryItems);
  const itemCount = computed(() => items.value?.length ?? 0);

  return {
    items,
    itemCount,
    strapiUrl,
  };
}
