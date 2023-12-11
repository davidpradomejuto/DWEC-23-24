
var j = true
var cadenaCaracteres = 'TRWAGMYFPDXBNJZSQVHLCKE';  
while (j) {
    var dni = prompt("Indica el DNI sin letra:");

    if (dni.match(/[0-9]{8}/) && dni.length == 8) { //valido si la cadena coincide con 8 numeros
        
        let numeroDni = parseInt(dni);

        //calculo la letra que le corresponde dividiendo los numeros del dni entre 23

        var resto = numeroDni%23;
        confirm(`La del DNI que corresponde con ${dni} es ${cadenaCaracteres.substring(resto,resto+1)}`);
        j = false;
    }else{
    alert("Error. introduce un dni valido, solo se permiten 8 numeros");
    }

}
