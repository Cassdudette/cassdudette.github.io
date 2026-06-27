const heroP = document.querySelector('.hero p');
const revealEls = document.querySelectorAll('.reveal');
let revealed = false;

window.addEventListener('scroll', () => {
  if (revealed) return;
  const pBottom = heroP.getBoundingClientRect().bottom;
  if (pBottom < 0) {
    revealed = true;
    revealEls.forEach(el => el.classList.add('visible'));
  }
});

