// Escribe un programa que simule el juego de memoria con
// cartas. El juego consiste en una cuadrícula de tarjetas con imágenes
// diferentes. El usuario debe voltear dos tarjetas para encontrar parejas de
// imágenes iguales. Si las tarjetas son iguales, se quedan las imágenes
// descubiertas fijas, se aumenta la puntuación y se informa al usuario de que ha
// tenido un acierto. Si las tarjetas no son iguales, se vuelven a girar. El juego
// termina cuando se encuentran todas las parejas.

addEventListener('DOMContentLoaded', () => {

    cajaverde = document.querySelector('#cajaverde');
    //le asigno valor al width en js por que si no, no se pone bien
    cajaverde.style.width = '10px';
    cajaroja = document.querySelector('#cajaroja');
        //le asigno valor al width en js por que si no, no se pone bien

    cajaroja.style.width = '10px';

    //genero el evento de keypress
    document.addEventListener('keypress', (evento) => {
        //evaluo si alguna de las barras a llegado a  500px, si no lo ha hecho aumento el tamaño 
        //dependiendo de la tecla que se haya pulsado
        
        if (cajaverde.style.width != '500px'  && cajaroja.style.width != '500px') {
            //si una tecla es presionada evaluo cual es y ejecuto su funcion correspondiente
            if (evento.key == "a") {
                aumentarTamanio(cajaverde);
                console.log(cajaverde.style.width);
            } else if (evento.key == "ñ") {
                aumentarTamanio(cajaroja);
                console.log(cajaroja.style.width);
            }
        }else{
            //si se ha llegado a 500px en alguna de las cajas compruebo quien ha ganado
            comprobarTamanio(cajaverde, cajaroja)
        }
    });

    //funcion para aumentar de tamaño una caja
    function aumentarTamanio(caja) {
        let valor = parseInt(caja.style.width) + 5;
        caja.style.width = valor + 'px';
    }

    //funcion para comprobar que barra es mas grande y dar un alert
    function comprobarTamanio(caja1, caja2) {
        if (caja1.style.width > caja2.style.width) {
            alert('Gana verde');
        } else {
            alert('Gana Rojo');
        }
    }
})