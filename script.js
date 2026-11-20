const slider = document.getElementById('levelSlider');
const water = document.getElementById('waterFill');
const label = document.getElementById('tankLabel');

function updateLevel() {
  const value = Number(slider.value);
  water.style.height = `${value}%`;
  label.textContent = `${value}%`;
}
slider.addEventListener('input', updateLevel);
updateLevel();

document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
