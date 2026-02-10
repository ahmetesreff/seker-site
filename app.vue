<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const isMenuOpen = ref(false);
const isCompact = ref(false);

const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const updateCompact = () => {
  if (!isMobile()) {
    isCompact.value = false;
    return;
  }

  isCompact.value = window.scrollY > 12;
};

onMounted(() => {
  updateCompact();
  window.addEventListener("scroll", updateCompact, { passive: true });
  window.addEventListener("resize", updateCompact, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateCompact);
  window.removeEventListener("resize", updateCompact);
});
</script>

<template>
  <div class="app">
    <header class="site-header" :class="{ 'is-compact': isCompact }">
      <NuxtLink to="/" class="brand" @click="closeMenu">
        <img
          class="brand-logo"
          src="/logo.webp"
          alt="Şeker Mermer logo"
          loading="eager"
        />
        <span class="brand-block">
          <span class="brand-text">Şeker Mermer</span>
          <span class="brand-subtext">Mermer ve Granit</span>
        </span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav"
        aria-label="Menü"
        @click="toggleMenu"
      >
        <span class="menu-toggle-icon" aria-hidden="true">
          <span class="menu-toggle-bar"></span>
          <span class="menu-toggle-bar"></span>
        </span>
        <span class="menu-toggle-label">Menü</span>
      </button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': isMenuOpen }">
        <NuxtLink to="/" @click="closeMenu">Ana Sayfa</NuxtLink>
        <NuxtLink to="/hakkimizda" @click="closeMenu">Hakkımızda</NuxtLink>
        <NuxtLink to="/hizmetler" @click="closeMenu">Hizmetler</NuxtLink>
        <NuxtLink to="/urunler" @click="closeMenu">Ürünler</NuxtLink>
        <NuxtLink to="/galeri" @click="closeMenu">Galeri</NuxtLink>
        <NuxtLink to="/markalar" @click="closeMenu">Markalar</NuxtLink>
        <NuxtLink to="/iletisim" class="nav-cta" @click="closeMenu">İletişim</NuxtLink>
      </nav>
    </header>

    <main class="site-main">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <span>© 2026 Şeker Mermer</span>
      <span>Mermer ve granit uygulamaları.</span>
    </footer>
  </div>
</template>
