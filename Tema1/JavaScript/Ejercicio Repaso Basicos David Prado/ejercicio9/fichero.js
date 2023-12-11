
var i = true

//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i) {
    var respuesta = prompt("Indica La palabra clave");
    if (respuesta != null) {
        if(respuesta == "DAW2"){
            alert(`La palabra  ${respuesta} es correcta` );
            i = false;
        }
    }
}





