// =====================================
// CRUD.JS
// Portfolio Management
// =====================================

// =====================================
// ELEMENT
// =====================================

const form = document.getElementById("projectForm");
const tableBody = document.getElementById("tableBody");
const search = document.getElementById("search");

let projects = getProjects();
let editIndex = -1;
const rowsPerPage = 5;

let currentPage = 1;

// =====================================
// RENDER TABLE
// =====================================

function renderTable(data = projects) {
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;

  const end = start + rowsPerPage;

  const pageData = data.slice(start, end);

  pageData.forEach((project, index) => {
    const realIndex = start + index;

    tableBody.innerHTML += `
            <tr>
                <td>${realIndex + 1}</td>

                <td>${project.nama}</td>

                <td>${project.kategori}</td>

                <td>${project.tahun}</td>

                <td>${project.status}</td>

                <td>
                    <button class="edit"
                        onclick="editProject(${realIndex})">
                        <i class="fa-solid fa-pen"></i>
                        Edit
                    </button>

                    <button class="delete"
                        onclick="deleteProject(${realIndex})">
                        <i class="fa-solid fa-trash"></i>
                        Hapus
                    </button>
                </td>
            </tr>
        `;
  });

  renderPagination(data.length);
}

function renderPagination(totalData) {
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalData / rowsPerPage);

  // Previous
  if (currentPage > 1) {
    pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})">
            Previous
        </button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
        <button
            class="${currentPage === i ? "active" : ""}"
            onclick="changePage(${i})">
            ${i}
        </button>
        `;
  }

  // Next
  if (currentPage < totalPages) {
    pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})">
            Next
        </button>`;
  }
}

function changePage(page) {
  currentPage = page;

  renderTable();
}

// =====================================
// SUBMIT FORM
// =====================================

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const project = {
    nama: document.getElementById("nama").value.trim(),
    kategori: document.getElementById("kategori").value,
    tahun: document.getElementById("tahun").value,
    status: document.getElementById("status").value,
  };

  // Tambah Data
  if (editIndex === -1) {
    projects.push(project);

    showToast("✅ Project berhasil ditambahkan", "success");
  }

  // Update Data
  else {
    projects[editIndex] = project;

    editIndex = -1;

    showToast("✏️ Project berhasil diperbarui", "success");
  }

  saveProjects(projects);
  currentPage = 1;

  renderTable();

  form.reset();
});

// =====================================
// EDIT PROJECT
// =====================================

function editProject(index) {
  editIndex = index;

  const project = projects[index];

  document.getElementById("nama").value = project.nama;
  document.getElementById("kategori").value = project.kategori;
  document.getElementById("tahun").value = project.tahun;
  document.getElementById("status").value = project.status;
}

// =====================================
// DELETE PROJECT
// =====================================

function deleteProject(index) {
  const confirmDelete = confirm("Yakin ingin menghapus project ini?");

  if (!confirmDelete) return;

  projects.splice(index, 1);

  saveProjects(projects);

  renderTable();

  showToast("🗑️ Project berhasil dihapus", "error");
}

// =====================================
// SEARCH
// =====================================

search.addEventListener("keyup", () => {
  const keyword = search.value.toLowerCase();

  const result = projects.filter((project) => {
    return project.nama.toLowerCase().includes(keyword) || project.kategori.toLowerCase().includes(keyword) || project.status.toLowerCase().includes(keyword);
  });

  currentPage = 1;

  renderTable(result);
});

// =====================================
// INITIALIZE
// =====================================

renderTable();
