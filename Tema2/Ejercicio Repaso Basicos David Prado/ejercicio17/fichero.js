
var i = false;

i = confirm("Quieres entrar en la pagina, la contraseña es 'contra'");

//mientra i sea true, el bucle seguira, si dice la palabra clave I pasa a false
while (i) {
    var respuesta = prompt("Indica la contraseña");
    if (respuesta != null) {
        if(respuesta == "contra"){
            alert(`La contraseña ${respuesta} es correcta` );
            i = false;
        }
    }
}





