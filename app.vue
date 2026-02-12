<script setup lang="ts">
const isMenuOpen = ref(false);
const isCompact = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const onBrandClick = () => {
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let ticking = false;
const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      isCompact.value = window.scrollY > 20;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="app">
    <header class="site-header" :class="{ 'is-compact': isCompact }">
      <NuxtLink to="/" class="brand" @click="onBrandClick">
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
        <NuxtLink to="/uygulamalarimiz" @click="closeMenu">Uygulamalarımız</NuxtLink>
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
