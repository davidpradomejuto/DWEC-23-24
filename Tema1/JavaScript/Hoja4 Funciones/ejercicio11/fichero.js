/* 
Escribe una función que lance dos dados tantas veces como indique un parámetro y
devuelva el lanzamiento que ha obtenido la puntuación ganadora.
*/


function rondasDados(numero) {
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



