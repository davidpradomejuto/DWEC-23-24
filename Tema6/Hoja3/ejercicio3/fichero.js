/* 
Crea un programa que, partiendo del siguiente código HTML, pregunte al usuario el
ancho, el alto y el color del borde de la caja. Debes ir rellenando cada atributo data
con su valor. Finalmente, debes recoger los valores de los atributos data y aplicar los
estilos correspondientes a la caja:
*/
addEventListener('load',inicio);

function inicio(){
    var alto = prompt('Introduce el alto de la caja');
    var ancho = prompt('Introduce el ancho de la caja');
    var color = prompt('Introduce el color del borde');

    var caja = document.querySelector('#caja');

    caja.setAttribute('data-height',alto);
    caja.setAttribute('data-width',ancho);
    caja.setAttribute('data-bordercolor',color);

}

 
 
 