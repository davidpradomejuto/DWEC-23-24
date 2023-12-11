
var j = true
var i = true;

var suma = 0;

while (j) {
    var nInicial = prompt("Indica el numero inicial");

    if (nInicial.match(/[0-9]*/) && nInicial != null && !isNaN(parseInt(nInicial)) && parseInt(nInicial) > 0) { //valido si la cadena coincide con nInicials

        while(suma <= nInicial){
            var numero = prompt(`Introduce un numero, suma actual ${suma}`);
 
            if (numero.match(/[0-9\,]*/) && numero != null && !isNaN(parseInt(numero)) && parseInt(numero) > 0) {

                suma += parseInt(numero);

            }else{
                alert("Error. introduce un numero valida mayor de 0");
            }
        }

        j = false;
    } else {
        alert("Error. introduce un numero inicial valido mayor de 0");
    }
}


