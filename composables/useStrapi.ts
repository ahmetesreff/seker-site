interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: Record<string, { url: string; width: number; height: number }>;
}

export interface GalleryItem {
  id: number;
  attributes: {
    title: string;
    coverImage: { data: { attributes: StrapiImage } };
    images: { data: Array<{ attributes: StrapiImage }> };
    videoUrl: string | null;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export function useStrapi() {
  const config = useRuntimeConfig();
  const baseURL = config.public.strapiUrl;

  function strapiUrl(path: string): string {
    if (path.startsWith("http")) return path;
    return `${baseURL}${path}`;
  }

  async function fetchGalleryItems(): Promise<GalleryItem[]> {
    const res = await $fetch<StrapiResponse<GalleryItem>>(
      `${baseURL}/api/gallery-items`,
      {
        params: {
          populate: "*",
          "sort[0]": "order:asc",
          "pagination[pageSize]": 100,
        },
      }
    );

    return res?.data ?? [];
  }

  async function fetchGalleryItem(id: string | number): Promise<GalleryItem | null> {
    const res = await $fetch<{ data: GalleryItem }>(
      `${baseURL}/api/gallery-items/${id}`,
      {
        params: {
          populate: "*",
        },
      }
    );

    return res?.data ?? null;
  }

  return {
    baseURL,
    strapiUrl,
    fetchGalleryItems,
    fetchGalleryItem,
  };
}
