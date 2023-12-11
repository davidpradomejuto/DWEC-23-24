function elementoMasRepetido(arr) {
    // Creamos un objeto para realizar un seguimiento de las repeticiones
    var contador = {};

    // Variables para realizar un seguimiento del elemento más repetido
    var elementoMasRepetido = arr[0];
    var repeticiones = 1;

    // Recorremos el array y contamos las repeticiones de cada elemento
    for (var i = 0; i < arr.length; i++) {

        var elemento = arr[i];
        
        if (contador[elemento] === undefined) {
            contador[elemento] = 1;
        } else {
            contador[elemento]++;
        }

        // Comprobamos si el elemento actual tiene más repeticiones que el actual elemento más repetido
        if (contador[elemento] > repeticiones) {
            elementoMasRepetido = elemento;
            repeticiones = contador[elemento];
        }
    }

    return "El elemento más repetido es '" + elementoMasRepetido + "' y aparece " + repeticiones + " veces.";
}

// Ejemplo de uso
var miArray = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
document.write(elementoMasRepetido(miArray));
