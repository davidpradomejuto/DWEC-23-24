var minus = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

var mayus = [];
/* 
Disponemos de una matriz de datos llamada minus con los días de la semana escritos en minúscula.
 A partir de minus, crea otro array mayus con las cadenas con el siguiente formato:
LuneS, MarteS, MiércoleS, JueveS, VierneS, SábadO, DomingO
Primera y última letra en mayúsculas
*/

for (var i = 0; i < minus.length; i++) {
    let palabraMinus = minus[i];
    palabraMinus = palabraMinus.charAt(0).toUpperCase() + palabraMinus.substring(1,palabraMinus.length-1)+palabraMinus.charAt(palabraMinus.length-1).toUpperCase()
    mayus.push(palabraMinus);
}

console.log(mayus);