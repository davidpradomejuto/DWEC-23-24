var i = 0
while (i < 1) {
    var digito = prompt("Indica el resultado de la suma 15+15");
    if (digito != null && !isNaN(parseInt(digito))) {

        console.log(`El resultado es ${ parseInt(digito) === 30 ? "CORRECTO": "INCORRECTO" }` );
        i++;
    }

}





