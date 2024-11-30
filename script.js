document.getElementById('check').addEventListener('click', () => {
    // Ambil semua input di tabel
    const inputs = document.querySelectorAll('input');
    let isCorrect = true;

    // Iterasi melalui setiap input
    inputs.forEach(input => {
        const answer = input.getAttribute('data-answer'); // Ambil jawaban yang benar dari atribut
        if (answer) { // Pastikan input memiliki data-answer
            if (input.value.toUpperCase() === answer.toUpperCase()) {
                // Jika jawaban benar, beri warna hijau
                input.style.backgroundColor = 'lightgreen';
            } else {
                // Jika salah, beri warna merah
                input.style.backgroundColor = 'red';
                isCorrect = false; // Tandai ada jawaban yang salah
            }
        }
    });

    // Tampilkan pesan berdasarkan hasil pengecekan
    const message = document.getElementById('message');
    if (isCorrect) {
        message.textContent = 'Selamat! Semua jawaban benar!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Ada yang salah, coba lagi!';
        message.style.color = 'red';
    }
});
