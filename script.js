
function agregarPantalla(value) {
    document.getElementById('pantalla').value += value;
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

