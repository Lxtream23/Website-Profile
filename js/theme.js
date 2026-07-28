// =====================================
// THEME.JS
// Dark Mode
// =====================================

function initTheme() {
  const themeButton = document.getElementById("themeToggle");

  // Jika halaman tidak memiliki tombol Dark Mode
  if (!themeButton) return;

  // Ambil tema yang tersimpan
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // Update ikon sesuai tema
  updateThemeIcon(themeButton);

  // Event klik tombol
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeIcon(themeButton);
  });
}

// =====================================
// Update Icon Theme
// =====================================

function updateThemeIcon(button) {
  const isDark = document.body.classList.contains("dark");

  button.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}
