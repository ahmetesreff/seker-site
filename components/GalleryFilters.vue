<script setup lang="ts">
import { STONE_TYPES, SERVICE_TYPES } from "~/composables/useGalleryFilters";

const props = defineProps<{
  activeStone: string | null;
  activeService: string | null;
}>();

const emit = defineEmits<{
  "update:stone": [value: string | null];
  "update:service": [value: string | null];
}>();

function toggleStone(value: string) {
  emit("update:stone", props.activeStone === value ? null : value);
}

function toggleService(value: string) {
  emit("update:service", props.activeService === value ? null : value);
}

function clearAll() {
  emit("update:stone", null);
  emit("update:service", null);
}

const hasFilter = computed(() => props.activeStone || props.activeService);
</script>

<template>
  <div class="gallery-filters">
    <div class="filter-group">
      <span class="filter-label">Taş Tipi</span>
      <div class="filter-chips">
        <button
          v-for="stone in STONE_TYPES"
          :key="stone.value"
          class="filter-chip"
          :class="{ 'is-active': activeStone === stone.value }"
          @click="toggleStone(stone.value)"
        >
          {{ stone.label }}
        </button>
      </div>
    </div>

    <div class="filter-group">
      <span class="filter-label">Hizmet</span>
      <div class="filter-chips">
        <button
          v-for="service in SERVICE_TYPES"
          :key="service.value"
          class="filter-chip"
          :class="{ 'is-active': activeService === service.value }"
          @click="toggleService(service.value)"
        >
          {{ service.label }}
        </button>
      </div>
    </div>

    <button v-if="hasFilter" class="filter-clear" @click="clearAll">
      Filtreleri temizle
    </button>
  </div>
</template>
