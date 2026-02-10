<template>
  <div class="app">
    <header class="site-header">
      <NuxtLink to="/" class="brand">
        <img
          class="brand-logo"
          src="/logo.png"
          alt="Şeker Mermer logo"
          loading="eager"
        />
        <span class="brand-block">
          <span class="brand-text">Şeker Mermer</span>
          <span class="brand-subtext">Mermer ve Granit</span>
        </span>
      </NuxtLink>
      <nav class="site-nav">
        <a href="#home">Ana Sayfa</a>
        <a href="#about">Hakkımızda</a>
        <a href="#services">Hizmetler</a>
        <a href="#products">Ürünler</a>
        <a href="#gallery">Galeri</a>
        <a href="#brands">Markalar</a>
        <a href="#contact" class="nav-cta">İletişim</a>
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
