/* 
Tenemos dentro de una sección en la página 5 imágenes, tal y como se muestra en la
siguiente imagen:

a. Disponemos también de un botón de borrado lento, cada vez que pulsamos, borra
una imagen hasta que no queda ninguna y entonces creo un párrafo dentro de la
sección con el siguiente mensaje “Ya están eliminadas todas las imágenes”.
b. Tenemos otro botón de borrado total que me borra todas las imágenes a la vez, y
hace exactamente lo mismo que en el anterior apartado, escribir un mensaje en
un párrafo.
*/

addEventListener('DOMContentLoaded', inicio);

function inicio() {
    var contenedor = document.querySelector('#contenedor');
    btnDelete.addEventListener('click', deleteOne);
    btnDeleteAll.addEventListener('click', deleteAll);

}

function deleteOne() {
    if (contenedor.childNodes.length > 0) {
        //elimino el primer hijo del contenedor
        contenedor.firstChild.remove();
    } else {
        //cuando se terminan de borrar los hijos se muestra ese parrafo

        var p = document.createElement('p');
        p.innerText = "“Ya están eliminadas todas las imágenes”";
        contenedor.appendChild(p);
        //deshabilito los botones
        btnDelete.disabled = true;
        btnDeleteAll.disabled = true;
    }
}

function deleteAll() {
    if (contenedor.childNodes.length > 0) {

        //mientras existan hijos va borrando el primero
        while (contenedor.childNodes.length > 0) {
            contenedor.removeChild(contenedor.firstChild);
        }
        //cuando se terminan de borrar los hijos se muestra ese parrafo
        var p = document.createElement('p');
        p.innerText = "“Ya están eliminadas todas las imágenes”";
        contenedor.appendChild(p);

        //deshabilito los botones
        btnDelete.disabled = true;
        btnDeleteAll.disabled = true;

    }
}

