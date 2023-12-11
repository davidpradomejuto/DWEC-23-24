/* 
Crea una función a la que se le pasen una serie de textos (mínimo dos) y detecte si los
mismos son anagramas o no. 

Un anagrama es una palabra que resulta de trasponer las etras de otra: por ejemplo “estanco” y “acentos”.
 La función devuelve verdadero si todas las palabras pasadas son anagramas de las mismas letras.
 */


function comprobarAnagramas(palabras) {

    if (palabras.length > 2) {
        //cojo una palabra clave, por defecto sera la primera,
        let palabraClave = palabras[0];

        for (let palabra of palabras) {
            //si alguna palabra no tiene el mismo numero de letras que la primera palabra , return false
            if (palabra.length != palabraClave.length) {
                console.log("Error: Las palabras no tienen el mismo numero de letras....");
                return false;
            } else {
                arrayPalabra = palabra.split("");
                for (let letra of arrayPalabra) {
                    //si cualquiera de las palabras no tiene las palabras de la primera , return false
                    if (!palabraClave.includes(letra)) {
                        console.log("Error: No todas las palabras son anagramas...");
                        return false;
                    }
                }
            }
        }
        return true;
    } else {
        return false;
    }
}


var palabras = ["hola", "aloh", "halo"];


console.log(comprobarAnagramas(palabras));




