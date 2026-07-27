// Fade in halaman
window.onload = function () {
  document.body.style.opacity = "1";

  loadDashboard();
};

// ==========================
// Dashboard
// ==========================

function loadDashboard() {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  document.getElementById("totalProject").innerText = projects.length;

  let website = projects.filter((p) => p.kategori === "Website").length;

  let mobile = projects.filter((p) => p.kategori === "Mobile").length;

  let uiux = projects.filter((p) => p.kategori === "UI/UX").length;

  document.getElementById("websiteProject").innerText = website;

  document.getElementById("mobileProject").innerText = mobile;

  document.getElementById("uiuxProject").innerText = uiux;
}
