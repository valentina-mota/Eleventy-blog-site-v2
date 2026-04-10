(function () {
  const postsList  = document.getElementById("posts-list");
  const searchInput = document.getElementById("archive-search");
  const countEl    = document.getElementById("archive-count");
  const emptyState = document.getElementById("empty-state");
  const catButtons = document.querySelectorAll(".category-btn");

  if (!postsList) return;

  const items = Array.from(postsList.querySelectorAll("li[data-category]"));
  const total = items.length;

  let selectedCategory = "all";
  let searchTerm       = "";

  function updateCount(visible) {
    if (!countEl) return;
    countEl.textContent = visible === total
      ? `${total} articles`
      : `${visible} of ${total} articles`;
  }

  function filter() {
    const term = searchTerm.toLowerCase();
    let visible = 0;

    items.forEach(item => {
      const cat  = (item.dataset.category || "").toLowerCase();
      const text = item.textContent.toLowerCase();

      const matchesCat    = selectedCategory === "all" || cat.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = term === "" || text.includes(term);

      if (matchesCat && matchesSearch) {
        item.style.display = "";
        visible++;
      } else {
        item.style.display = "none";
      }
    });

    updateCount(visible);
    if (emptyState) emptyState.style.display = visible === 0 ? "block" : "none";
  }

  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.dataset.category;
      filter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchTerm = e.target.value.trim();
      filter();
    });
  }

  updateCount(total);
})();
