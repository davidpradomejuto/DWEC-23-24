
function parImpar(numero){
    var result = 'impar';
    if(numero %2 == 0){
        result ='par';
    }
    return result;
}


for(var i =0; i<=500;i++){
    let aleatorio = Math.floor(Math.random() * (10000 - 1) + 1);

    document.write(`El numero ${aleatorio} es ${parImpar(aleatorio)} <br>`);
}
/*
Crea una función que devuelve la palabra par si le enviamos un número par.
 En caso contrario devuelve la palabra impar. 
 Conseguir que se escriban en una página web 500 números aleatorios del 1 al 10.000 y 
 que a su lado se diga si es par o impar gracias a la unción anterior.
 */