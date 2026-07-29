// =====================================
// APP.JS
// Main Entry Point
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Theme
  // ==========================

  if (typeof initTheme === "function") {
    initTheme();
  }

  // ==========================
  // Dashboard (khusus index)
  // ==========================

  if (typeof loadDashboard === "function") {
    loadDashboard();
  }

  // ==========================
  // Chart (khusus index)
  // ==========================

  if (typeof loadChart === "function") {
    loadChart();
  }
});
