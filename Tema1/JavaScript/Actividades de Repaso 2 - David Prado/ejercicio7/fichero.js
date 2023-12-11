
var j = true

while (j) {
    var nombre = prompt("Indica el Dia de la semana:");

    if (nombre.match(/[LMXJV]/) && nombre.length === 1) { //valido si la cadena coincide con solo letras  y si solo tiene 1 caracter
        switch (true) {
            case nombre === "L":
                confirm(`El horario para el Lunes es de Desarrollo en servidor`);
                break;
            case nombre === "M":
                confirm(`El horario para el Martes es de Despliege`);
                break;

            case nombre === "X":
                confirm(`El horario para el Miercoles es de Desarrollo en servidor`);
                break;

            case nombre === "J":
                confirm(`El horario para el Jueves es de Despliege`);
                break;
            case nombre === "V":
                confirm(`El horario para el Viernes es de desarrollo cliente`);
                break;

            default:
                console.log(`Algo ha salido mal`);
                break;
        }

        j = false;
    } else { 
        alert("Error. introduce un dia valido (L,M,X,J,V)");
     }




}
