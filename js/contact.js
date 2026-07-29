// =====================================
// CONTACT FORM
// =====================================

function initContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",

      title: "Pesan berhasil dikirim",

      text: "Terima kasih telah menghubungi saya.",

      confirmButtonColor: "#1e3a5f",
    });

    form.reset();
  });
}
