
var j = true

while (j) {
    var numero = prompt("Indica el numero del que quieras sacar el factorial");

    if (numero.match(/[0-9]*/) && numero != null && !isNaN(parseInt(numero)) && parseInt(numero)>0) { //valido si la cadena coincide con 8 numeros

        let factorial = 1;
        for (i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }
        confirm(`El factorial de ${numero} es ${factorial}`);
        j = false;
    }else{
    alert("Error. introduce un numero valido");
    }
}


