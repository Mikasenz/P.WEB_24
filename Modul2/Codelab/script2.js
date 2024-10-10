document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form di-submit

    // Mendapatkan nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    // Validasi apakah ada input yang kosong
    if (name === '' || email === '' || address === '') {
        alert('Semua data harus diisi.');
    } else {
        alert('Form berhasil disubmit!');
    }
});
