/* 
Crea un script que identifique el número de palabras que hay en este texto:
“por ciena cañones por banda poema de Espronceda” y después le añada un
punto al final de la frase antes del nombre del autor.
*/

var texto = "por ciena cañones por banda poema de Espronceda";
//separo las palabras y lo convierto a un array de palabras
var arrPalabra = texto.split(" ");

//el tamaño del array son las palabras que tengo
var nPalabras = arrPalabra.length;

//en la palabra anterior a espronceda añado un .
arrPalabra[arrPalabra.indexOf("Espronceda")-1] = arrPalabra[arrPalabra.indexOf("Espronceda")-1].concat(".");

//junto todo el array con un espacio entre las palabras
texto = arrPalabra.join(" ");

console.log(texto);
console.log(`El texto tiene ${nPalabras} palabras`);