var minus = ['Lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

var mayus = [];
/* 
Disponemos de una matriz de datos llamada minus con los días de la semana escritos en minúscula.
 A partir de minus, crea otro array mayus con las cadenas con el siguiente formato:
LuneS, MarteS, MiércoleS, JueveS, VierneS, SábadO, DomingO
Primera y última letra en mayúsculas
*/

for (var i = 0; i < minus.length; i++) {
    var letra = minus[i].charAt(0).toUpperCase();
    letra = minus[i].charAt(minus.length).toUpperCase();
    mayus.push(letra);
}

console.log(mayus);