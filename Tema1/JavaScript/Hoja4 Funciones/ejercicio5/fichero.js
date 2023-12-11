/* 
Crea una función que reciba un array de 10 elementos, los rellena con números
aleatorios entre 1 y 100 y los ordene, de manera que aparezcan primero aquellos que
termina en 0.
*/

let array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function aleatorios1a100(vector1) {

    vector1.forEach(function (elemento, posicion) {
        vector1[posicion] = Math.floor(Math.random() * 100) + 1;
    })

    vector1.sort((a, b) => a % 10 - b % 10);

    return vector1;
}

console.log(aleatorios1a100(array1));