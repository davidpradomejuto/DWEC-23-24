/* 
Programa una función que reciba un array de cadenas de caracteres y que por medio
del método filter devuelva aquellos caracteres que no forman parte del alfabeto
español. Prueba la función incluyendo palabras con caracteres como ^, $ o &amp;.
*/
let palabras = ["hola", "pêpe", "adi&s"];

let letras = [];

for (let palabra of palabras) {
    for (let letra of palabra.split("")) {
        letras.push(letra);
    }
}

function filtroEspaniol(letras) {

    letras = letras.filter(elemento =>
        !elemento.match("[A-Za-zñÑ]"));

    return letras;
}

console.log(filtroEspaniol(letras));