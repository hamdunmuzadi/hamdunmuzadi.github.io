const CACHE_NAME = 'SW-001';
const toCache = [
    '/',
    '/settings.json',
    'servive-workers.js',
    'img/Gorental512.png',
    'img/gorental193.png',
]



function tampilkanData(jenis) {
    var nama = document.getElementById('nama').value;
    var nohp = document.getElementById('tel').value;
    var tanggal = document.getElementById('date').value;
    var jenis = document.getElementById('mobil').value;
    var days = document.getElementById('hari').value;

    var totalHarga = 0;
    hari = days;
    jenisMobil = jenis;

    if (jenisMobil == "Minibus"){
        totalHarga = hari * 300000;
        document.getElementById("Total").value = totalHarga;
    }
    else if (jenisMobil == "Box"){
        totalHarga = hari * 500000;
        document.getElementById("Total").value = totalHarga;
    }
    else if (jenisMobil == "Pickup"){
        totalHarga = hari * 200000;
        document.getElementById("Total").value = totalHarga;
    }
    document.getElementById("name").innerHTML = nama;
    document.getElementById("no").innerHTML = nohp;
    document.getElementById("tgl").innerHTML = tanggal;
    document.getElementById("car").innerHTML = jenis;
    document.getElementById("day").innerHTML = days;
    document.getElementById("Total").innerHTML = totalHarga;
    
}


