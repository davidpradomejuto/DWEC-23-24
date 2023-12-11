
var j = true
var i = 0;

var suma = 0;

while (j) {
    var nInicial = prompt("Indica el numero inicial");

    if (nInicial.match(/[0-9]*/) && nInicial != null && !isNaN(parseInt(nInicial)) && parseInt(nInicial) > 0) { //valido si la cadena coincide con nInicials

        while(i < nInicial){ //mientras i sea menor que el numero inicial introducido por el usuario sigue en el bucle
            var numero = prompt(`Introduce un numero ${i}`);
 
            if (numero.match(/[0-9]*/) && numero != null && !isNaN(parseInt(numero)) && parseInt(numero) > 0) {//valido la entrada

                suma += parseInt(numero); //si es valido lo meto en la suma
                i++ //sumo 1 a I para restar un intento

            }else{
                alert("Error. introduce un numero valida mayor de 0"); // si la validacion es mala da error
            }
        }

        j = false; // si la validacion es buena deja de repetirse y empieza a pedir los numeros para hacer la media
    } else {
        alert("Error. introduce un numero inicial valido mayor de 0");
    }
}

//al completarse todo da la media
document.write(`La media de todos los numeros ha sido ${ suma / nInicial}`);

