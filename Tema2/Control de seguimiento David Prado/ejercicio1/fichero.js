addEventListener('load', inicio, false);

function inicio() {
    validar.addEventListener("click", validarCaracter, false);
    
}

var cadenaValida = '';

function validarCaracter() {
    const caracter = cajaentrada1.value;

    if (caracter.match(/[a-zA-Z]/) && caracter.length === 1) { //valido si la cadena coincide con solo letras  y si solo tiene 1 caracter
        //si el caracter introducido es valido, le añado a la cadena de caracteres
        cadenaValida += caracter;

        //pongo en la caja la cadena de caracteres
        cajav1.value = cadenaValida;

        //reseteo el input del caracter a vacio y le doy el focus
        cajaentrada1.value = '';
        cajaentrada1.focus();

    } else if (caracter === '*') { 
        //si el caracter es valido pongo en la cajav2 la longitud de la cadena, 
        //este saldrá despues del alert
        cajav2.value = cadenaValida.length;
        //pido confirmacion si quiere continuar para borrar los datos
        var continuar = confirm("¿Quieres continuar?");
        //si se ha confirmado la variable continuar tendra un true y se borraran los datos
        if (continuar) {
            cadenaValida = '';
            cajav1.value = '';
            cajav2.value = '';
            cajaentrada1.value = '';
            cajaentrada1.focus();
        } else {
            //si no se coonfirma da un mensaje de despedida
            alert("Despedida");
        }
    } else {
        alert("Solo se puede introducir un caracter y no puede ser numerico");
        cajaentrada1.value = '';
        cajaentrada1.focus();
    }
}
