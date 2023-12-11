/* 
Crea una función que reciba un array de palabras, la función devolverá un mapa que
contenga como clave cada palabra y el valor es el número de veces que esa palabra
aparece en el array. 

Haremos una página web que lea palabras hasta que el usuario
cancele o deje el cuadro vacío y mostraremos las repeticiones de las palabras.
*/

var palabras = ["hola", "hola", "hola", "adios", "hasta luego", "hasta luego"];

function rondasDados(palabras) {
    for (var i = 1; i <= numero; i++) {

        let n1 = Math.floor(Math.random() * (6 - 1) + 1);

        let n2 = Math.floor(Math.random() * (6 - 1) + 1);

        if (n1 > n2) {
            document.write(`El ganador de la ronda numero ${i} es el primer jugador con un ${n1}<br>`);
        } else if (n2 == n1) {
            document.write(`La ronda numero ${i} ha quedado en empate con un ${n1}<br>`);
        } else {
            document.write(`El ganador de la ronda numero ${i} es el segundo jugador con un ${n2}<br>`);
        }
    }
}

rondasDados(10);



