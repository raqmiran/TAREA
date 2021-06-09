
function toggleSection() {
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (!operacionesContenedor.style.display || operacionesContenedor.style.display === "none") {
        operacionesContenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar operaciones";
    } else {
        operacionesContenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar operaciones";
    }
}
function sumar() {
    var numero1 = document.getElementById('myNumber1').value;
    var numero2 = document.getElementById('myNumber2').value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    validarVacios(resultado,"suma");
}
function restar() {
    var numero1 = document.getElementById('myNumber1').value;
    var numero2 = document.getElementById('myNumber2').value;
    var resultado = numero1 - numero2;
    validarVacios(resultado,"resta");
}
function multiplicar() {
    var numero1 = document.getElementById('myNumber1').value;
    var numero2 = document.getElementById('myNumber2').value;
    var resultado = numero1 * numero2;
    validarVacios(resultado,"multiplicacion");
}
function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}
function imprimirMensaje(op, res) {
    var mensaje = "El resultado de la " + op + " es: " + res;
    document.getElementById('result').textContent = mensaje;
}
