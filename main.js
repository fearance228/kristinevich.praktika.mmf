document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion__btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isOpen = content.classList.toggle('is-open');
      if (isOpen) {
        setTimeout(() => {
          content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    });
  });
});