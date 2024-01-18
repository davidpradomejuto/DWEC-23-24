
addEventListener('DOMContentLoaded',(event) => {

    var lista = document.querySelector('ol');
    console.log(lista);    
    // cogo el Li del Ol del medio
    var medio = lista.children[1];
 
    console.log(`Elemento del medio ${medio.textContent}`);
    console.log(`Elemento del anterior ${medio.previousElementSibling.textContent}`);
    console.log(`Elemento del siguiente ${medio.nextElementSibling.textContent}`);
 });
 
 
 