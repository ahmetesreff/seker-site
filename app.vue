<template>
  <div class="app">
    <header class="site-header">
      <NuxtLink to="/" class="brand">
        <img
          class="brand-logo"
          src="/logo.png"
          alt="Seker Mermer logo"
          loading="eager"
        />
        <span class="brand-block">
          <span class="brand-text">Seker Mermer</span>
          <span class="brand-subtext">Mermer ve Granit</span>
        </span>
      </NuxtLink>
      <nav class="site-nav">
        <a href="#about">Hakkimizda</a>
        <a href="#services">Hizmetler</a>
        <a href="#products">Urunler</a>
        <a href="#gallery">Galeri</a>
        <a href="#brands">Markalar</a>
        <a href="#contact" class="nav-cta">Iletisim</a>
      </nav>
    </header>

    <main class="site-main">
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <span>(c) 2026 Seker Mermer</span>
      <span>Mermer ve granit uygulamalari.</span>
    </footer>
  </div>
</template>
