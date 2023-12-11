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
    numeros1.value = "1,2,3,4,5,22,33";
}
function cargarEjemplo2() {
    numeros2.value = "6,7,8,9,0";
}

function concatenar() {
    const resultado = document.getElementById("resultado");

    let cadena = new Array();
    let longitud = 0;
    let vector = numeros1.value.split(",");
    let vector2 = numeros2.value.split(",");

    if (vector.length >= vector2.length) {
        longitud = vector.length;
    } else {
        longitud = vector2.length;
    }

    let seguir = true;
    let seguir2 = true;

    for (let i = 0; i < longitud; i++) {

        seguir = typeof vector[i] === 'undefined' ? false : true;
        seguir2 = typeof vector2[i] === 'undefined' ? false : true;

        if(seguir){
            cadena.push(parseInt(vector[i]));
        }
        
        if (seguir2) {
            cadena.push(parseInt(vector2[i]));
        }

    }

    resultado.innerHTML = `El resultado de la concatenacion es ${cadena}`;

}