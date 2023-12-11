addEventListener('load', inicio, false);

function inicio() {
    enviar.addEventListener("click", adivinarNumero, false);
}

// genero el numero entre 1 y 100
var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivinarNumero() {
    //cogo el numero que me da el usuaruo y le guardo
    var numeroUsuario = parseInt(numeroEntrada.value);

    //valido que se un numero valido entre 1 y 100
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        //si no lo se doy un error en la caja mensajes
        mensajes.value = "Error. Introduce un numero valido entre 1 y 100";
    } else {
        //si es correcto , sumo 1 a la variable intentos
        intentos++;
        //y dependiendo si es mayor, menor o igual, pongo en la caja mensajes una 
        //cosa u otra
        if (numeroUsuario < numeroSecreto) {
            mensajes.value = "El numero introducido es menor que el mio";
        } else if (numeroUsuario > numeroSecreto) {
            mensajes.value = "El numero introducido es mayor que el mio";
        } else {
            //si el valor dado por el usuario y el generado es igual 
            //dejo un mensaje en la caja mensajes y hago un alert
            mensajes.value = `GENIAL!! HAS ACERTADO, MI NÚMERO ERA ${numeroSecreto}.`;
            alert(`Has acertado en ${intentos} intentos.`);
        }
    }
}


