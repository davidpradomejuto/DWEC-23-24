/* 
Realizar un script que nos pide la introducción de una cadena por teclado que
tenga más de 10 caracteres y a continuación visualizar:

a. El octavo carácter

b. En qué posición aparece la primera vez ese carácter

c. En qué posición aparece la última vez ese carácter

d. Extraer la cadena de caracteres que está entre la primera y la última aparición de “nuestro carácter”.

e. Transformar en esa cadena los caracteres pares a mayúsculas y los impares a minúsculas. Visualizar la cadena completa.
*/

var contador = 0
var caracter = "e"
var correcto = true;
while (correcto){
    var cadena = prompt("Introduce una cadena que tenga mas de 10 caracteres");
    if (cadena.length > 10)
    correcto = false;
}


console.log(cadena.charAt(8));

if(cadena.includes(caracter)){
    console.log(`El caracter aparece por primera vez en la posicion ${cadena.indexOf(caracter)}`);
}else{
    console.log(`La cadena no contiene el caracter ${caracter}`);
}

if(cadena.includes(caracter)){
    console.log(`El caracter aparece por ultima vez en la posicion ${cadena.lastIndexOf(caracter)}`);
}else{
    console.log(`La cadena no contiene el caracter ${caracter}`);
}

var cadenaExtraida = cadena.substring(cadena.indexOf(caracter),cadena.lastIndexOf(caracter));
console.log(`La cadena extraida es ${cadenaExtraida}`);

var arrCadena = cadena.split("");
for (let i = 0; i< arrCadena.length; i++) {
    if( i == 0 || i%2 == 0){
        arrCadena[i] = arrCadena[i].toUpperCase();
    }
}

cadena = arrCadena.join("");

console.log(cadena);