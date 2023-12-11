/* 
Crea una función que reciba un array de palabras, la función devolverá un mapa que
contenga como clave cada palabra y el valor es el número de veces que esa palabra
aparece en el array. 

Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío 
y mostraremos las repeticiones de las palabras.*/


function contarRepeticiones(palabras) {
    let mapa = new Map();

    for (let palabra of palabras) {
        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 0);
        }
    }

    return mapa;
}


var sigue = true;
var palabras = [];

while (sigue) {
    let palabra = prompt("Introduce un una palabra");

    if (palabra != '' && palabra != null) {
        palabras.push(palabra);

    } else {
        sigue = false;
        let resultado = contarRepeticiones(palabras);

        for (let [palabra, cantidad] of resultado) {
            document.write(`${palabra} => ${cantidad} veces<br>`);
        }

    }
}





