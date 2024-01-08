/* 
Crea un script que recoja el valor de la anchura y la altura total de la pantalla
del usuario y calcule su diagonal.
*/

var diagonal= Math.sqrt(screen.height**2+screen.width**2);


document.write(`alto => ${screen.height}px <br> ancho => ${screen.width}px <br> La diagonal de esta pantalla es de ${Math.floor(diagonal)} px`);

