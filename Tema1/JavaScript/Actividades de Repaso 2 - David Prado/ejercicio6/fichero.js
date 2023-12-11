var i = true;

var numero1 = 0;
var numero2 = 0;
var aux1=0;
var aux2=0;
while (i) {

    var numero1 = prompt(`Introduce el numero 1`);
    if (numero1.match(/[0-9\,]*/) && numero1 != null && !isNaN(parseInt(numero1)) && parseInt(numero1) > 0) {

        //si numero1 es un numero entero positivo entra al segundo prompt
        var numero2 = prompt(`Introduce el numero 2`);
        if (numero2.match(/[0-9\,]*/) && numero2 != null && !isNaN(parseInt(numero2)) && parseInt(numero2) > 0) {

            if(numero1<aux1 || numero2 <aux2){//si los numeros introducidos son menores, se corta el bucle
                i = false;
                alert("Has introducido un numero menor, fin del bucle");
            }else{
                //si los numero introducidos son mayores que los que estaban antes
                //se realiza un dump de las variables para reusarlas
                aux1=numero1;
                aux2=numero2;
            }

        } else {
            alert("Error. introduce un numero valida mayor de 0");
        }

    } else {
        alert("Error. introduce un numero valida mayor de 0");
    }

}