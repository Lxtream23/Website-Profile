// =====================================
// NOTIFICATION.JS
// SweetAlert2 Helper
// =====================================

// Success
function showSuccess(message) {
  Swal.fire({
    icon: "success",
    title: "Berhasil",
    text: message,
    timer: 1800,
    showConfirmButton: false,
  });
}

// Error
function showError(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

// Confirm Delete
function confirmDelete(callback) {
  Swal.fire({
    title: "Hapus Project?",
    text: "Data yang dihapus tidak dapat dikembalikan.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1E3A5F",
    cancelButtonColor: "#dc3545",
    confirmButtonText: "Ya, Hapus",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
}
