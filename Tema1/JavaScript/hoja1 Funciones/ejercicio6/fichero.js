
function adivinar(patron){
    patron =  patron.split('');

    let palabra="sargento";
    palabra = palabra.split('');

    let result = '';

    for (var letra of palabra) {
        let coincide = false;
        //por cada letra de la palabra miro si es alguna de las palabras del patron
        if(patron.includes(letra)){
            result+=letra; 
            coincide = true;     
        }else{
           result+='-'; 
        }
    }
    console.log(result);
}

adivinar('aeiousn');

/*
Escribe una función que, a partir de una palabra establecida por el programador,
reciba como parámetros un número variable de letras y muestre en pantalla solo las
coincidencias entre la palabra secreta y las letras proporcionadas

Por ejemplo, si la palabra secreta establecida es “sargento” y se ha invocado a la
función como adivina (‘a’, ‘e’, ‘i’, ‘o’, ‘u’, ‘d’, ‘n’), la salida del programa debe ser -
a—en-o
 */