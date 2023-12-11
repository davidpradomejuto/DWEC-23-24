
var i = true
var suma=0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i) {
    var digito = prompt("Introduce un numero");
    if (digito != null && !isNaN(parseInt(digito))) {
        suma+=parseInt(digito);
        i = confirm("Deseas seguir?");
    }
}

document.write(`La suma de todos los numeros ha sido ${suma}`);





