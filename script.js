const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.querySelector('.empty-state');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    projectCards.forEach((card) => {
      const visible = selected === 'all' || card.dataset.category === selected;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount > 0;
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.classList.toggle('is-open', !expanded);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
