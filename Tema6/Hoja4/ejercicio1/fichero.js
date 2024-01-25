/* 
Realiza un scipt que recorra y muestre con un alert de JavaScript cada tipo de nodo del
árbol de una página HTML que previamente hayas creado. Puedes crear un documento
HTML que tenga varios párrafos, algún bloque div y algún botón de formulario.
*/
addEventListener('load',inicio);

function inicio(){
    var documento = document.querySelector('body');

    var hijos = documento.childNodes;

    hijos.forEach(element => {
        alert(`Elementos ${element.nodeName}`);
    });
}


 
 
 