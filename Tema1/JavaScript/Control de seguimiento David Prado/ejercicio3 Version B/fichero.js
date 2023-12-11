
var i = true
var suma=0;
//mientra i sea true, el bucle seguira pidiendo numeros

do{
     //hago un prompt con el mensaje que quiero y recogo el valor en una variable
     var digito = prompt("Introduce un numero, entre 1 y 5");
     //si lo introducido no es null , es un digito valido y esta entre 1 y 5 , rompo el bucle y muestro un 
     //aler con el mesanje formateado como template string
     if (digito != null && !isNaN(parseInt(digito)) && parseInt(digito) >1 && parseInt(digito) <5 ) {
         i = false;
         alert(`El numero introducido es ${digito}`);
     }
}while(i);





