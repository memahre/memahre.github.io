(function () {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  // Active nav highlighting
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = links.find((a) => a.getAttribute("href") === `#${id}`);
        if (!link) return;

        if (entry.isIntersecting) {
          links.forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    { root: null, threshold: 0.55 }
  );

  sections.forEach((s) => observer.observe(s));

  // Default active on load
  if (links[0]) links[0].classList.add("active");

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
