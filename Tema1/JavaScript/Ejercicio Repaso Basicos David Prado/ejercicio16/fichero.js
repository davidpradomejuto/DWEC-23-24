
var i = 1;
var suma=0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i<=10) {
    var digito = prompt(`Introduce un numero ${i}`);
    if (digito != null && !isNaN(parseInt(digito))) {
        if(i>=5){
        suma+=parseInt(digito);
        }
    i++;
    }
}

console.log(`La suma de los ultimo 5 numeros ha sido ${suma}`);





