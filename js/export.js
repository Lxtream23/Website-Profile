// =====================================
// EXPORT.JS
// =====================================

// Export Excel
document.getElementById("exportExcel")?.addEventListener("click", exportExcel);

// Export PDF
document.getElementById("exportPDF")?.addEventListener("click", exportPDF);

// =====================================
// EXPORT EXCEL
// =====================================

function exportExcel() {
  const data = getProjects();

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Portfolio");

  XLSX.writeFile(workbook, "Portfolio.xlsx");
}

// =====================================
// EXPORT PDF
// =====================================

function exportPDF() {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  const data = getProjects();

  const rows = data.map((project, index) => [index + 1, project.nama, project.kategori, project.tahun, project.status]);

  doc.text("Portfolio Management", 14, 15);

  doc.autoTable({
    head: [["No", "Nama", "Kategori", "Tahun", "Status"]],

    body: rows,

    startY: 22,
  });

  doc.save("Portfolio.pdf");
}
