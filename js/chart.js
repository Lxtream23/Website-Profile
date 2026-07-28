// ================================
// Chart Project Berdasarkan CRUD
// ================================

// Ambil data dari LocalStorage
const projects = getProjects();

// Hitung jumlah setiap kategori
const website = projects.filter((p) => p.kategori === "Website").length;
const mobile = projects.filter((p) => p.kategori === "Mobile").length;
const desktop = projects.filter((p) => p.kategori === "Desktop").length;
const uiux = projects.filter((p) => p.kategori === "UI/UX").length;

// Ambil canvas
const ctx = document.getElementById("myChart");

if (ctx) {
  new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Website", "Mobile", "Desktop", "UI / UX"],

      datasets: [
        {
          label: "Jumlah Project",

          data: [website, mobile, desktop, uiux],

          backgroundColor: ["#1E3A5F", "#4F7CAC", "#7DA0CA", "#A7C5EB"],

          borderRadius: 12,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },
      },

      scales: {
        y: {
          beginAtZero: true,

          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
}
