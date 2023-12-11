/* 
Escribe una función recursiva que indique si la palabra que le pasas como parámetro
es palíndroma (devuelve true) o no (devuelve false). Una palabra es palíndroma si se
lee igual de izquierda a derecha que de derecha a izquierda.
*/

function palindromo(palabra) {
    let reversa = '';


    /*
    for(let i =palabra.length; i>0 ; i--){
        reversa+=palabra.substring(i,i-1);
    }
    */
    return reversa == palabra ? true : false;
}

if (palindromo("ana")) {
    console.log("la palabra ana es palindromo");
} else {
    console.log("La palabra ana no es palindromo");
}

if (palindromo("hola")) {
    console.log("la palabra hola es palindromo");
} else {
    console.log("La palabra hola no es palindromo");
}