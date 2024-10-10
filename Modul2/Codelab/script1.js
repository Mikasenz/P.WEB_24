function hitung() {
    var bil1 = parseFloat(document.getElementById('bilangan1').value);
    var bil2 = parseFloat(document.getElementById('bilangan2').value);
    var hasil = bil1 + bil2;
    document.getElementById('hasil').innerHTML = "Hasil: " + hasil;
}

function reset() {
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
    document.getElementById('hasil').innerHTML = "Hasil: 0";
}
