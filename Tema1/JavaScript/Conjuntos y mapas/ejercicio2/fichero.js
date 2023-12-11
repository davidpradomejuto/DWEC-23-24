/*Crea un conjunto vacío y añádele todos los elementos de los arrays [12, 12, 12, 14],
[11, 11, 13, 15], ["i", "j", "k", "l"]. 
¿Cuántos elementos contiene el conjunto? 
¿Por qué?

Haz un recorrido del conjunto, muestra en pantalla cada uno de sus elementos y
razona por qué aparecen en ese orden.
*/
var vector = [[12,12,12,14],[11,11,13,15],["i", "j", "k", "l"]];

var lista = new Set();

for (var i of vector) { 
    for (var j of i) {
        lista.add(j);
    }
}


console.log(lista);

document.write(`El tamaño de la lista es de ${lista.size}<br>`);

for (var i of lista) {
    document.write(i+",");
}
