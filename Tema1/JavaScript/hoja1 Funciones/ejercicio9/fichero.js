function media(numeros) {

    suma = 0;
    for (var numero of numeros) {
        suma += numero;
    }

    return suma / numeros.length;

}

console.log(media([4, 7, 3, 1, 4, 6, 9, 8, 6, 3, 1]));

/*
Crea una función, a la que se pasa como parámetros una cantidad indeterminada de
números, que calcule la media de esos números.
 */