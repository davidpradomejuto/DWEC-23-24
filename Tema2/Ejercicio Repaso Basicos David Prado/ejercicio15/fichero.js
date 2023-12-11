
var i = true
var suma=0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i) {
    var digito = prompt("Introduce un numero, con el 9999 se termina el programa");
    if (digito != null && !isNaN(parseInt(digito)) && parseInt(digito) !== 9999) {
        suma+=parseInt(digito);
    }
}

console.log(`La suma de todos los numeros ha sido ${suma}`);





