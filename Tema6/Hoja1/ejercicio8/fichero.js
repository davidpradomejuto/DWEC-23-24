/* 
Crea un programa que muestre en consola cuántos elementos p, a y span hay
en una pieza de código HTML.

*/
addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var p = document.querySelectorAll('p');
    var a =  document.querySelectorAll('a');
    var span =  document.querySelectorAll('span');


    console.log(`hay ${p.length} parrafos`);
    console.log(`hay ${a.length} enlaces`);
    console.log(`hay ${span.length} spans`);

}
