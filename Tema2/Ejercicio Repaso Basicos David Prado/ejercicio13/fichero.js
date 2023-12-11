
var i = 0;
var pares = 0;
var impares = 0;
//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i<5) {
    var digito = prompt("Introduce un numero: ");
    if (digito != null && !isNaN(parseInt(digito))) {
        if(parseInt(digito) % 2 == 0){
            pares++;
        }else{
            impares++;
        }
        i++;
    }
}

console.log(`Los numeros pares han sido ${pares}`);
console.log(`Los numeros impares han sido ${impares}`);





