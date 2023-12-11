/* 
Crea un programa que simule el funcionamiento de un bingo. 

El número de cartones que participan será siempre de cinco. 

Cada cartón tendrá 4 filas y 8 columnas con 20 números del 1 al 90 distribuidos de forma aleatoria (máximo de cinco por fila). 

El programa irá sacando bolas y los cartones se irán comprobando en tiempo real. 

El programa termina cuando un cartón alcanza el bingo. 

En ese momento se debe mostrar en pantalla cuál de los cinco cartones es el ganador y los números que han
salido para comprobar que el bingo es correcto.

Plantea el problema, analízalo con detenimiento y diseña previamente todas las funciones que vas a necesitar para
resolverlo. Luego, implementa tu solución.
*/
const CARTONES = 5;
const FILAS = 4;
const COLUMNAS = 8;

var bombo = [];
var lista = [];

//meto los numeros en el bombo
for (let i = 1; i <= 90; i++) {
    bombo.push(numero);
}


function jugar() {
    let cartones = [];
    //creo los cartones
    for (let i = 0; i < CARTONES; i++) {
        cartones[i] = crearCarton();
    }

    for (let j = 0; j <= 90; j++) {
        let bola = sacarBola(bombo);
        bombo
    }
}


function sacarBola(bombo) {
    let result = 0;
    //saco un numero aleatorio de la lista
    let numero = Math.floor(Math.random() * bombo.length) + 1;

    //pongo el numero que me ha salido el ultimo, y le hago pop
    let aux = bombo[length - 1];
    bombo[length - 1] = bombo[numero];
    bombo[numero] = aux;

    result = bombo[length - 1];
    //quito el ultimo elemento del array que es el numero que he sacado
    bombo.pop();

    return result, bombo;
}

function comprobarBingo(lista, cartones) {

    return lista, bombo;
}

function crearCarton() {
    //el carton va a contener 4 listas, que se corresponde con cada fila
    var carton = [];

    for (let i = 0; i < FILAS; i++) {

        let fila = new Set();
        //5 numeros por lista
        for (let i = 0; i < 5; i++) {

            let repetido = false;
            do { //hago un bucle para comprobar si en esa fila existe ese numero
                //genero el numero aleatorio
                let numero = Math.floor(Math.random() * 90) + 1;

                if (!fila.has(numero)) {//si la fila no tiene el numero compruebo que el carton en general no lo tenga

                    for (let filaCarton of carton) {
                        for (let numero of filaCarton) {
                            //compruebo que ninguna fila del carton tenga ese numero tampoco
                            repetido = filaCarton.has(numero);
                        }
                    }

                }

                //si el numero no se ha encontrado ni en el carton, se añade a la fila
                if (!repetido)
                    fila.add(numero);

            }
            while (repetido)
            //una vez termianda toda la fila, la pongo en el carton
            carton.push(lista);
        }

        return carton;
    }
}