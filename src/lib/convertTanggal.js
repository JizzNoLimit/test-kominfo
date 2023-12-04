export default function convertTanggal(data) {
    // Membuat objek Date dari tanggal awal
    var tanggalObj = new Date(data);

    // Daftar hari dalam Bahasa Indonesia
    var daftarHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    // Daftar bulan dalam Bahasa Indonesia
    var daftarBulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    // Mendapatkan hari, tanggal, bulan, dan tahun dari objek Date
    var hari = daftarHari[tanggalObj.getUTCDay()];
    var tanggal = tanggalObj.getUTCDate();
    var bulan = daftarBulan[tanggalObj.getUTCMonth()];
    var tahun = tanggalObj.getUTCFullYear();

    // Menggabungkan hasilnya dalam format yang diinginkan
    var hasil = `${hari}, ${tanggal} ${bulan} ${tahun}`;

    return hasil
}