// /js/components/topSocial.js
export function topSocial() {
  const el = document.querySelector("#top-social");
  if (!el) return;

  el.innerHTML = `
    <div class="top-social">
      <div class="top-social__container">
        <a class="top-social__icon" href="#" aria-label="Facebook">f</a>
        <a class="top-social__icon" href="#" aria-label="Instagram">◎</a>
        <a class="top-social__icon" href="#" aria-label="YouTube">▶</a>
      </div>
    </div>
  `;
}
