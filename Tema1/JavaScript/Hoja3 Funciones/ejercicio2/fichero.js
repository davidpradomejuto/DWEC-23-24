addEventListener('load', inicio, false);

function inicio() {
    btnConcatenar.addEventListener("click", concatenar, false);
    btnCargarEjemplo1.addEventListener("click", cargarEjemplo1, false);
    btnCargarEjemplo2.addEventListener("click", cargarEjemplo2, false);
    btnReiniciar.addEventListener("click", limpiar, false);

}

function limpiar() {
    numeros1.value = "";
    numeros2.value = "";
    numeros1.focus();
}

function cargarEjemplo1() {
    numeros1.value = "1,2,3,4,5";
}
function cargarEjemplo2() {
    numeros2.value = "6,7,8,9,0";
}

function concatenar() {
    const resultado = document.getElementById("resultado");

    let cadena = new Array();

    let vector = numeros1.value.split(",");
    let vector2 = numeros2.value.split(",");

    if (vector.length == vector2.length) {

        for (let i = 0; i < vector.length; i ++) {
            cadena.push(parseInt(vector[i]));
            cadena.push(parseInt(vector2[i]));
        }
        

        resultado.innerHTML = `El resultado de la concatenacion es ${cadena}`;
    } else {
        resultado.innerHTML = `Los arrays no son de la misma logitud`;
    }
}