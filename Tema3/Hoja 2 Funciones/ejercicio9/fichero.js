function calcularLetraDni(dni) {
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    dni = parseInt(dni);
    let posicion = dni % (cadena.length - 1);
    return cadena[posicion];
  }


  document.write("72197202"+calcularLetraDni(72197202));
/* 
Crea una función que devuelva la letra del DNI que recibe como parámetro.
*/