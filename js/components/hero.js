// /js/components/hero.js
export function hero() {
  const el = document.querySelector("#hero");
  if (!el) return;

  el.innerHTML = `
    <div class="hero__bg">
      <div class="hero__container">
        <div class="hero__left">
          <div class="hero__brand">
            <h2 class="hero__name">IRATXE SANCHEZ</h2>
            <p class="hero__tagline">Coach de Vida</p>
          </div>

          <h1 class="hero__title">
            Encuentra el Equilibrio<br/>
            en tu Vida <span class="hero__soft">y Desarrolla</span><br/>
            tu Mejor Versión
          </h1>

          <p class="hero__desc">
            Te acompaño en tu camino hacia el bienestar personal<br/>
            y emocional.
          </p>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#cta-final">Agenda una Sesión</a>
            <a class="btn btn--ghost" href="#sobre-mi">Saber Más</a>
          </div>
        </div>

        <div class="hero__right">
          <div class="hero__photoWrap">
            <img
              class="hero__photo"
              src="../assets/img/iratxe.png"
              alt="Iratxe Sanchez"
            />
          </div>
        </div>
      </div>
    </div>
  `;
}
