/* 
Escribe un programa que vaya interrogando al usuario sobre una lista de
ingredientes. Por cada ingrediente se debe añadir un elemento a una lista
desordenada. La petición de ingredientes finalizará cuando el usuario pulse el
botón Cancelar.

*/
addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var ingrediente = '';
    var sigue = true;
    var lista = document.querySelector('#lista');

    while(sigue){
        //pregunto por el ingrediente
        ingrediente = prompt('Que ingrediente quieres añadir?');
        //pido confirmacion para seguir preguntando
        sigue = confirm("Quieres seguir?");
        //añado a la lista el ingrediente
        aniadir();
    }
    
    //funcion para añadir un ingrediente a la lista
    function aniadir(){
        //genero un li
        var li = document.createElement('li');
        //le añado el texto de ingrediente
        li.textContent = ingrediente;
        //añadi el li a la lista
        lista.appendChild(li);
    }


}



