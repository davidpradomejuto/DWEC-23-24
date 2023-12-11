function contarPares(numeros){

    var pares = 0;

    for (let numero of numeros) {
        
        if(numero % 2 == 0){
            pares++;
        }
    }
    return pares;
}

var numeros =[1,4,8,4,5,7,3,2,7,1,123,8,5];
console.log(contarPares(numeros));

/*
Crea una función que sirva para contar la cantidad de números pares que hay en un
array.
 */