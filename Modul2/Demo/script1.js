// Menyimpan ekspresi yang akan dihitung
let currentExpression = '';

// Fungsi untuk menambah angka ke ekspresi
function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

// Fungsi untuk menambah operator ke ekspresi
function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

// Fungsi untuk melakukan perhitungan
function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

// Fungsi untuk menghapus semua (Clear All)
function clearAll() {
    currentExpression = '';
    updateDisplay();
}

// Fungsi untuk memperbarui layar/tampilan
function updateDisplay() {
    document.getElementById('result').value = currentExpression;
}
