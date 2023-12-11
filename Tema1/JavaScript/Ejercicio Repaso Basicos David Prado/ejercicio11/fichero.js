
var i = 0;
var suma = 0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i<5) {
    var digito = prompt("Introduce un numero: ");
    if (digito != null && !isNaN(parseInt(digito))) {
        suma+=parseInt(digito);
        i++;
    }
}

console.log(`El resultado de la suma es ${suma}`)





