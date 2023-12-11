/* 
Escribe una función que haciendo uso de filter genere un array a partir de los
elementos de otro array que contiene cadenas de caracteres, sin los elementos que
contengan tildes.*/

let palabras = ["á", "b", "c", "d", "davíd", "david", "é"];

palabras = palabras.filter(elemento => !elemento.includes("á") &&
    !elemento.includes("é") && !elemento.includes("í") &&
    !elemento.includes("ó") && !elemento.includes("ú") &&
    !elemento.includes("Á") && !elemento.includes("Í") &&
    !elemento.includes("Ó") && !elemento.includes("Ú") && !elemento.includes("É"));

console.log(palabras);