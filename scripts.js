document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glass-card");
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  }, options);
  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    observer.observe(card);
  });
});
