/* 
Crea una función que reciba un número variable de parámetros numéricos (al menos
cuatro) y devuelva su suma, su media aritmética, la multiplicación del primero con el
último, y la división del segundo con el penúltimo.
*/

let array = [4, 4, 4, 5, 5, 5];

function devolverEstadisticas(arr) {

    let suma = 0;
    let media = 0;
    let multiplicacion = 0;
    let division = 0;

    if (array.length > 4) {

        for (let elemento of arr) {
            suma += elemento;
        }

        media = suma / arr.length;
        multiplicacion = arr[0] * arr[arr.length - 1];
        division = arr[1] * arr[arr.length - 2];

        console.log(`La suma da ${suma}, la media da ${media} , la multiplicacion da ${multiplicacion},la division da ${division}`);

    } else {
        console.log("El array no contiene mas de 4 elementos");
    }

}

console.log(devolverEstadisticas(array));