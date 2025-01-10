// Script untuk halaman login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Email: ${email}\nPassword: ${password}`);
});

document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


if (regPassword != confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok!");
        return;
}
});
