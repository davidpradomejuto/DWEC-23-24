addEventListener('load', inicio, false);


function inicio() {
    btnInsertar.addEventListener("click", insertar, false);
    btnCargarEjemplo.addEventListener("click", cargarEjemplo, false);
    btnReiniciar.addEventListener("click", limpiar, false);

}

function limpiar() {
    valor.value = "";
    posicion.value = "";
    elementos.value = "";
    elementos.focus();
}

function cargarEjemplo() {
    elementos.value = "1,2,3,4,5";
}


function insertar() {
    const resultado = document.getElementById("resultado");
    var vector = new Array();

    //convierto la string de los numeros en un array de enteros
    var numeros = elementos.value.split(",");

    for (let i = 0; i < numeros.length; i++) {
        vector.push(parseInt(numeros[i]));
    }

    if(posicion.value<vector.length && posicion.value>=0) {
        vector[posicion.value] = valor.value;
        resultado.innerHTML = `Se ha insertado el elemento ${valor.value} en la posicion ${posicion.value} `;
    }else{
        resultado.innerHTML = `Error: la posicion introducida no esta en el array`;
    }

    numeros = vector.join(",");
    elementos.value = numeros;
}