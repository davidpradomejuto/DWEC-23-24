/*
Crea un mapa con cinco pares de elementos de manera que tanto las claves como los
valores sean cadenas de caracteres.
 Luego idea algún mecanismo para ordenar alfabéticamente los valores del mapa. Muestra el resultado por pantalla.
*/
var personas = new Map(); 
personas.set("71197272H", "David");
personas.set("72197272U", "Cesar");
personas.set("73197272E", "Luis");
personas.set("74197272T", "Pedro");
personas.set("75197272F", "Alvaro");


// Ordenar por Value
var personas = new Map( [...personas.entries()].sort((a, b) =>  a[1].localeCompare(b[1])));

console.log(personas);