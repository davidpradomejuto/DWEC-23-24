var i = 1
while (i <= 1) {
    var numero = prompt(`Introduce el numero que quieras multiplicar`);
    if (numero != null && !isNaN(parseInt(numero)) && parseInt(numero)>0) {  
        for (let x = 1; x <=10; x++) {
            document.write(` ${numero} x ${x} = ${numero*x} <br>`);
        }
        i++;
    }
}

