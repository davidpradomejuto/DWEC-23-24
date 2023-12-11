
var i = true
var contador = 0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i) {
    var digito = prompt("Introduce un numero: ");
    if (digito != null && !isNaN(parseInt(digito))) {
        contador++;
    }else{
        i=false;
        console.log(`El numero de digitos introducidos es ${contador}`);
    }
}





