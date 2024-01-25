/* 
Crea una lista desordenada con diez elementos. Luego pregunta al usuario si la quiere
ordenar. Si pulsa Aceptar la lista debe ordenarse alfabéticamente. Si pulsa Cancelar la
lista debe desordenarse aleatoriamente.
*/
addEventListener('load', inicio);

function inicio() {

    var ordenar = confirm('Quieres ordenar la tabla?');

    var lista = document.querySelector('ul');

    var elementos = Array.from(lista.children);

    var arrayTexto = new Array();

    //una vez recogidos los elementos LI , saco su texto a otro array

    elementos.forEach(element => {
        arrayTexto.push(element.textContent);
    });

    //elimino todos lo LI del UL
    elementos.forEach(element => {
        lista.removeChild(element);
    });

    //dependiendo si se dice de ordennar o no hago una cosa u otra
    if (ordenar) {
        //ordeno el array de textos
        arrayTexto.sort();
    } else {
        arrayTexto.sort((a, b) => 0.5 - Math.random());
    }


    //y creo un LI para cada texto y le añado a la lista
    arrayTexto.forEach(element => {
        var li = document.createElement('li');
        li.innerText = element;

        lista.appendChild(li);
    });




}
