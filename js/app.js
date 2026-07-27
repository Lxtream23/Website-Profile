// =====================================
// APP.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  loadDashboard();

  initTheme();
});

// =====================================
// DASHBOARD
// =====================================

function loadDashboard() {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const totalProject = document.getElementById("totalProject");

  const websiteProject = document.getElementById("websiteProject");

  const mobileProject = document.getElementById("mobileProject");

  const desktopProject = document.getElementById("desktopProject");

  const uiuxProject = document.getElementById("uiuxProject");

  // Jika bukan halaman index, cukup keluar
  if (!totalProject) return;

  totalProject.textContent = projects.length;

  websiteProject.textContent = projects.filter((p) => p.kategori === "Website").length;

  mobileProject.textContent = projects.filter((p) => p.kategori === "Mobile").length;

  if (desktopProject) {
    desktopProject.textContent = projects.filter((p) => p.kategori === "Desktop").length;
  }

  uiuxProject.textContent = projects.filter((p) => p.kategori === "UI/UX").length;
}

// =====================================
// DARK MODE
// =====================================

function initTheme() {
  const themeButton = document.getElementById("themeToggle");

  // Jika halaman tidak memiliki tombol theme
  if (!themeButton) return;

  // Cek tema tersimpan
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  // Klik tombol
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");

      themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem("theme", "light");

      themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}
