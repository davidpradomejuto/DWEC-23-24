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

addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var contenedor = document.querySelector('#contenedor');
    btnAddP.addEventListener('click',addP);

}

function addP(){
    var section = document.createElement('section');
    section.innerHTML='<a href=”#”>Enlace 1</a><br><a href=”#”>Enlace 2</a><br><a href=”#”>Enlace 3</a><br>';
    contenedor.appendChild(section);
}
