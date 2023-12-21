/* 
Escribe un programa que le pida al usuario qué porcentaje quiere aplicar para
redimensionar la ventana. El programa debe pedir confirmación y solo en caso
de que se acepte, se redimensionará la ventana el porcentaje indicado. Es
necesario, igualmente, ir mostrando por la consola qué va ocurriendo en cada
momento.
*/

addEventListener('load', inicio, false);

function inicio() {
    btnRedimensionar.addEventListener('click', redimensionar, false);
}

function redimensionar(){
    window.resizeTo(window.innerWidth * porcentaje.value / 100, window.innerHeight);

}

