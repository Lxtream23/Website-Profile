// =====================================
// DASHBOARD.JS
// Dashboard Statistics
// =====================================

function loadDashboard() {
  const projects = getProjects();

  // Jika bukan halaman Home
  const totalProject = document.getElementById("totalProject");

  if (!totalProject) return;

  const websiteProject = document.getElementById("websiteProject");
  const mobileProject = document.getElementById("mobileProject");
  const desktopProject = document.getElementById("desktopProject");
  const uiuxProject = document.getElementById("uiuxProject");

  // Statistik
  let website = 0;
  let mobile = 0;
  let desktop = 0;
  let uiux = 0;

  projects.forEach((project) => {
    switch (project.kategori) {
      case "Website":
        website++;
        break;

      case "Mobile":
        mobile++;
        break;

      case "Desktop":
        desktop++;
        break;

      case "UI/UX":
        uiux++;
        break;
    }
  });

  // Tampilkan Statistik
  totalProject.textContent = projects.length;

  websiteProject.textContent = website;

  mobileProject.textContent = mobile;

  if (desktopProject) {
    desktopProject.textContent = desktop;
  }

  uiuxProject.textContent = uiux;
}
