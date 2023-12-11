/* 
Programa una función que reciba como parámetros dos arrays de 4x4 y devuelva un
tercer array relleno de ceros excepto en aquellas posiciones en las que los dos
primeros arrays tengan valores iguales.
*/

let array1 = [[1, 2, 3, 4], [5, 6, 7, 8], [10, 11, 12, 13], [14, 15, 16, 17]];
let array2 = [[1, 99, 3, 99], [99, 6, 99, 8], [10, 99, 12, 99], [99, 15, 99, 17]];

function rellenarCeros(vector1, vector2) {
    let array3 = [[], [], [], []];
    //for each de la primera dimension
    vector1.forEach(function (dimension, posicionDimension) {

        dimension.forEach(function (elemento, posicion) {
            if (elemento == vector2[posicionDimension][posicion]) {

                array3[posicionDimension][posicion] = elemento;

            } else {

                array3[posicionDimension][posicion] = 0;

            }
        })

    })

    return array3;
}

console.log(rellenarCeros(array1, array2));