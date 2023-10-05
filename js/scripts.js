var btnCarrito = document.getElementById('btnClick');
var btnClean = document.getElementById('btnClean');
var contador = document.getElementById('contador');
var contar = 0;

btnCarrito.onclick = function() {
    contar++;
    contador.textContent = contar;
}

btnClean.onclick = function() {
    contador.textContent = 0;
}