// main.js
import { KlasifikasiUmur } from './utils.js';

function panggilKlasifikasi(input) {
    try {
        const parsed = Number(input);

        if (isNaN(parsed)) {
            throw new Error('Input tidak valid, harus berupa angka!');
        }

        const category = KlasifikasiUmur(parsed);
        console.log(`umur anda : ${parsed}`,  `Kategori umur: ${category}`);
    } catch (err) {
        console.error(`Terjadi kesalahan: ${err.message}`);
    }
}
// Pemanggilan menggunakan array
const daftarUmur = [1, 0.12, 70, 20, 500, 'abc', 15];

daftarUmur.forEach (panggilKlasifikasi);    

// Contoh pemanggilan
// panggilKlasifikasi(0.1);   // Baby
// panggilKlasifikasi(4);     // Toddler
// panggilKlasifikasi(10);    // Kids
// panggilKlasifikasi(18);    // Teen
// panggilKlasifikasi(25);    // Young Adult
// panggilKlasifikasi(45);    // Adult
// panggilKlasifikasi(70);    // Lansia
// panggilKlasifikasi(105);   // Error
// panggilKlasifikasi('abc'); // Error
// panggilKlasifikasi(-5);    // Error
