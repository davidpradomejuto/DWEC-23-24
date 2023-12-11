/* 
Escribe una función que dado un array de enteros positivos lo ordene, pero además
sitúe a los pares al principio del array. Ambos grupos deben estar también ordenados.
*/

function ordenarParesAlPrincipio(numeros) {
    numeros.sort((a, b) => a - b);

    numeros.sort((a, b) => a % 2 - b % 2);

    return numeros;
}


let numeros = [45, 23, 65, 2, 66];


console.log(ordenarParesAlPrincipio(numeros));