// =====================================
// SCROLL PROGRESS
// =====================================

function initScrollProgress() {
  const progressBar = document.getElementById("progressBar");

  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";
  });
}
