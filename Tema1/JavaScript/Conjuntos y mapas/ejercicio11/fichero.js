/*
Crea un programa que pida al usuario un texto y una clave y escriba el mismo texto,
pero desplazando los caracteres en la tabla Unicode el número que indique la clave.
Utiliza los métodos charCodeAt y fromCharCode.
*/

var numeros = new Map();

var texto = prompt("Introduce un texto :");
var clave = parseInt(prompt("Introduce una clave :"));

var caracteres = [];

for (let i = 0 ; i < texto.length ; i++) {
    //a toda la longitud de la frase voy sacando cada caracter en formato tabla unicode
    caracteres.push(texto.charCodeAt(i)+clave);
}

//cogo el array de los caractres unicode y los convierto en letras normales
texto = String.fromCharCode(...caracteres);

console.log(texto);