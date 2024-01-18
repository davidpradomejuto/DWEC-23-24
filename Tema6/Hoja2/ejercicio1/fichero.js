/* 
Crea un script para que cada vez que presionemos un botón se añada un párrafo con
este texto: “Nuevo nodo nºx”. (Irá mostrando el número de nodos de texto que se han
añadido hasta el momento).
*/

addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var contenedor = document.querySelector('#contenedor');
    btnAddP.addEventListener('click',addP);

}

function addP(){
    var p = document.createElement('p');
    p.innerText='parrafo';
    contenedor.appendChild(p);
}
