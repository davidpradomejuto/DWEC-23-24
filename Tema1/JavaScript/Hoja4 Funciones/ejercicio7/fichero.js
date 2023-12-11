/* 
Escribe una función que devuelva true si dos palabras que recibe como parámetros
contienen las mismas letras, aunque se encuentren en posiciones distintas.
*/

let palabra1 = "adios";
let palabra2 = "diosa"

function mismasLetras(palabra1, palabra2) {

    if (palabra1.length == palabra2.length) {

        arrayPalabra1 = palabra1.split("");

        for (let letra of arrayPalabra1) {
            if (!palabra2.includes(letra))
                return false;
        }

    } else {
        return false;
    }

    return true;
}

console.log(mismasLetras(palabra1, palabra2));