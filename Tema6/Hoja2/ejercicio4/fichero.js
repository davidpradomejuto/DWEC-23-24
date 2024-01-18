/* 
4. Crea una web con un párrafo y tres botones: “Cambiar texto”, “Agregar Lista” y
“Borrar Contenido”. Utiliza las funciones y métodos necesarios para realizar las
siguientes tareas:
a. “Cambiar Texto” cambia el contenido del párrafo por “Nuevo Texto”.
b. “Agregar Lista”, agrega una lista desordenada con tres elementos al final del
párrafo
c. “Borrar Contenido”, elimina el párrafo y la lista (si existe)
*/

addEventListener('DOMContentLoaded', inicio);

function inicio() {
    var contenedor = document.querySelector('#contenedor');
    btnCambiar.addEventListener('click', changeP);
    btnAgregar.addEventListener('click', addList);
    btnBorrar.addEventListener('click', deleteAll);

}

function changeP() {
    var p = document.querySelector("#contenedor>p");
    p.innerHTML = "Nuevo texto";
    btnCambiar.disabled = true;
}

function addList() {
    var lista = document.createElement('ul');

    for (let i = 0; i < 3; i++) {

        let li = document.createElement('li');
        li.innerText = "objeto de la lista";
        //añado el li a UL
        lista.appendChild(li);
        console.log(lista.appendChild(li));
    }
    contenedor.appendChild(lista);
    btnAgregar.disabled = true;
}

function deleteAll() {
    let ul = contenedor.querySelector('ul');
    let p = contenedor.querySelector('p')
    if (ul && p) {
        ul.remove();

        p.innerText = "texto antiguo";
        btnAgregar.disabled = false;
        btnCambiar.disabled = false;
    } else {
        alert('No tienes elementos que borrar');
    }
}