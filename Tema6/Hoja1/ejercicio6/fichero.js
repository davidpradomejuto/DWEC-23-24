/* 
Crea un programa que, partiendo de un código HTML con una lista ordenada
de personas, devuelva los nombres de la primera y de la última de la lista.
*/
addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var lista = document.querySelector('ol');
    console.log(lista);    
    // cogo el Li del Ol del medio
    var medio = lista.children[1];
    console.log(`Elemento del 1 ${medio.previousElementSibling.textContent}`);
    console.log(`Elemento del 2 ${medio.textContent}`);
    console.log(`Elemento del 3 ${medio.nextElementSibling.textContent}`);
}