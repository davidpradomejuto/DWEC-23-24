/*Crea un conjunto vacío y añádele todos los elementos de los arrays [12, 12, 12, 14],
[11, 11, 13, 15], ["i", "j", "k", "l"]. 
¿Cuántos elementos contiene el conjunto? 
¿Por qué?

Haz un recorrido del conjunto, muestra en pantalla cada uno de sus elementos y
razona por qué aparecen en ese orden.
*/
var vector = [12,12,12,14,11,11,13,15];
var sinRepetir = new Set(vector);

vector = [...sinRepetir];

console.log(vector);
