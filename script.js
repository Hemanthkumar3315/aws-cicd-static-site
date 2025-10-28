document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease";
      card.style.opacity = 1;
    }, 300 * i);
  });
});
console.log("Website loaded successfully!");

