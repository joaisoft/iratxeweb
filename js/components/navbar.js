// /js/components/navbar.js
export function navbar() {
  const el = document.querySelector("#navbar");
  if (!el) return;

  el.innerHTML = `
    <header class="nav">
      <div class="nav__container">
        <div class="nav__brand">
          <span class="nav__brandName">IRATXE SANCHEZ</span>
        </div>

        <nav class="nav__menu" aria-label="Navegación principal">
          <a class="nav__link" href="#hero">Inicio</a>
          <a class="nav__link" href="#sobre-mi">Sobre Mí</a>
          <a class="nav__link" href="#servicios">Servicios</a>
          <a class="nav__link" href="#blog">Blog</a>
          <a class="nav__link" href="#cta-final">Contacto</a>
        </nav>

        <a class="nav__cta" href="#cta-final">Consulta Gratis</a>
      </div>
    </header>
  `;
}
