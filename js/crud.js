// ============================
// CRUD Portfolio
// ============================

const form = document.getElementById("projectForm");
const tableBody = document.getElementById("tableBody");
const search = document.getElementById("search");

let projects = JSON.parse(localStorage.getItem("projects")) || [];
let editIndex = -1;

// ============================
// SIMPAN DATA
// ============================

function saveData() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// ============================
// TAMPILKAN DATA
// ============================

function renderTable(data = projects) {
  tableBody.innerHTML = "";

  data.forEach((project, index) => {
    tableBody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${project.nama}</td>

            <td>${project.kategori}</td>

            <td>${project.tahun}</td>

            <td>${project.status}</td>

            <td>

                <button class="edit" onclick="editProject(${index})">

                    Edit

                </button>

                <button class="delete" onclick="deleteProject(${index})">

                    Hapus

                </button>

            </td>

        </tr>

        `;
  });
}

// ============================
// TAMBAH / UPDATE
// ============================

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const project = {
    nama: document.getElementById("nama").value,

    kategori: document.getElementById("kategori").value,

    tahun: document.getElementById("tahun").value,

    status: document.getElementById("status").value,
  };

  if (editIndex === -1) {
    projects.push(project);
  } else {
    projects[editIndex] = project;

    editIndex = -1;
  }

  saveData();

  renderTable();

  form.reset();
});

// ============================
// EDIT
// ============================

function editProject(index) {
  editIndex = index;

  document.getElementById("nama").value = projects[index].nama;

  document.getElementById("kategori").value = projects[index].kategori;

  document.getElementById("tahun").value = projects[index].tahun;

  document.getElementById("status").value = projects[index].status;
}

// ============================
// DELETE
// ============================

function deleteProject(index) {
  if (confirm("Yakin ingin menghapus project ini?")) {
    projects.splice(index, 1);

    saveData();

    renderTable();
  }
}

// ============================
// SEARCH
// ============================

search.addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();

  const hasil = projects.filter((project) => project.nama.toLowerCase().includes(keyword) || project.kategori.toLowerCase().includes(keyword) || project.status.toLowerCase().includes(keyword));

  renderTable(hasil);
});

// ============================
// LOAD
// ============================

renderTable();
