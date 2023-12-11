var numero = 0;

var i = 1
while (i <= 3) {
    var digito = prompt(`Introduce el numero ${i}`);
    if (digito != null && !isNaN(parseInt(digito))) {
        
        if(parseInt(digito)>numero){
            numero = parseInt(digito);
        }
        i++;
    }
}
console.log(`El mayor numero ha sido el ${numero}`);

