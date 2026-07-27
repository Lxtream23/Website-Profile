// =====================================
// APP.JS
// Dashboard Website Profile
// =====================================

// Jalankan setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  loadDashboard();
});

// =====================================
// Dashboard
// =====================================

function loadDashboard() {
  // Ambil data dari LocalStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  // Cari elemen dashboard
  const totalProject = document.getElementById("totalProject");
  const websiteProject = document.getElementById("websiteProject");
  const mobileProject = document.getElementById("mobileProject");
  const desktopProject = document.getElementById("desktopProject");
  const uiuxProject = document.getElementById("uiuxProject");

  // Jika bukan halaman Home, hentikan fungsi
  if (!totalProject) return;

  // Hitung data
  const total = projects.length;

  const website = projects.filter((project) => project.kategori === "Website").length;

  const mobile = projects.filter((project) => project.kategori === "Mobile").length;

  const desktop = projects.filter((project) => project.kategori === "Desktop").length;

  const uiux = projects.filter((project) => project.kategori === "UI/UX").length;

  // Tampilkan ke Dashboard
  totalProject.textContent = total;

  websiteProject.textContent = website;

  mobileProject.textContent = mobile;

  if (desktopProject) {
    desktopProject.textContent = desktop;
  }

  uiuxProject.textContent = uiux;
}
