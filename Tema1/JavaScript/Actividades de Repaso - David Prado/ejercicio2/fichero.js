
var j = true

while (j) {
    var nombre = prompt("Indica el Dia de la semana:");

    if (nombre.match(/[LMXJVSD]/) && nombre.length === 1) { //valido si la cadena coincide con solo letras  y si solo tiene 1 caracter
        switch (true) {
            case nombre === "L":
                confirm(`El horario para el Lunes es de 9:00 a 15:00`);
                break;
            case nombre === "M":
                confirm(`El horario para el Martes es de 9:00 a 15:00`);
                break;

            case nombre === "X":
                confirm(`El horario para el Miercoles es de 9:00 a 15:00`);
                break;

            case nombre === "J":
                confirm(`El horario para el Jueves es de 9:00 a 15:00`);
                break;
            case nombre === "V":
                confirm(`El horario para el Viernes es de 9:00 a 15:00`);
                break;
            case nombre === "S":
                confirm(`El horario para el Sabado es de 9:00 a 13:00`);
                break;
            case nombre === "D":
                confirm(`Los domingos estamos cerrados`);
                break;

            default:
                console.log(`Algo ha salido mal`);
                break;
        }

        j = false;
    } else { 
        alert("Error. introduce un dia valido (L,M,X,J,V,S,D)");
     }




}
