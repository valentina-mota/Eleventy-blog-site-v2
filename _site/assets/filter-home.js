// filter-home.js — filters featured grid by guest author category
(function () {
  const grid      = document.getElementById("featured-grid");
  const emptyEl   = document.getElementById("featured-empty");
  const veroBtn   = document.getElementById("veronica-filter-btn");

  if (!grid || !veroBtn) return;

  const cards = Array.from(grid.querySelectorAll("article[data-category]"));
  let filtered = false;

  veroBtn.addEventListener("click", () => {
    filtered = !filtered;

    if (filtered) {
      // Show only Veronica's category
      const targetCat = veroBtn.dataset.category.toLowerCase();
      let visible = 0;

      cards.forEach(card => {
        const cat = (card.dataset.category || "").toLowerCase();
        if (cat === targetCat) {
          card.style.display = "";
          visible++;
        } else {
          card.style.display = "none";
        }
      });

      emptyEl.style.display = visible === 0 ? "block" : "none";
      veroBtn.textContent = "✕ Show all posts";
      veroBtn.classList.add("active");

    } else {
      // Reset — show all
      cards.forEach(card => card.style.display = "");
      emptyEl.style.display = "none";
      veroBtn.textContent = "🔐 Read Veronica's articles";
      veroBtn.classList.remove("active");
    }
  });
})();
