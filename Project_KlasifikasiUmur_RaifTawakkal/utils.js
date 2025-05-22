// KlasifikasiUmur.js
export function KlasifikasiUmur(age) {
    if (typeof age !== 'number') {
        throw new Error('Input harus berupa angka valid!');
    }

    if (age < 0) {
        throw new Error('Umur tidak boleh kurang dari 0!');
    }

    if (age > 100) {
        throw new Error('Umur tidak boleh lebih dari 100!');
    }

    if (age >= 0 && age <= 0.12) {
        return 'Baby';
    } 
    if (age >= 1 && age <= 5) {
        return 'Toddler';
    } 
    if (age >= 6 && age <= 12) {
        return 'Kids';
    } 
    if (age >= 13 && age <= 20) {
        return 'Teen';
    } 
    if (age >= 21 && age <= 29) {
        return 'Young Adult';
    } 
    if (age >= 30 && age <= 59) {
        return 'Adult';
    } 
    if (age >= 60 && age <= 100) {
        return 'Lansia';
    } 
}
