// =====================================
// STORAGE.JS
// Local Storage Helper
// =====================================

const STORAGE_KEY = "projects";

// =====================================
// GET ALL PROJECTS
// =====================================

function getProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// =====================================
// SAVE PROJECTS
// =====================================

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

// =====================================
// CLEAR PROJECTS
// =====================================

function clearProjects() {
  localStorage.removeItem(STORAGE_KEY);
}
