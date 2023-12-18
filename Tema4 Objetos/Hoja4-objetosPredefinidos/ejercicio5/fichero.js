/* 
Crea una aplicación web que sirva para validar NIF indicando si es correcto o
no. 

Un NIF consta de una posible letra que puede ser una X, una Y o una Z.

Puede no haber letra y entonces habrá un número.

Después habrá 7 números más. 

Finalmente habrá una letra que cumple una fórmula.

La fórmula de la letra, ya conocida, consiste en dividir los números del NIF entre 23 y tomar el resto. 

Cuando la primera cifra es una X, se cambia por el número 0 para hacer este cálculo. 

La Y se cambia por el número 1 y la Z por el número 2. El resto
obtenido se comprueba con los datos de la siguiente tabla:
*/

function comprobarNif(codigo) {
    const regex = /^[XYZ0-9][0-9]{7}[A-Z]/;
    let terminaciones = ['T', 'R', 'W', 'A','G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (regex.test(codigo)) {
        let numeros='';

        let letraFinal = codigo.substring(8, 9);

        if (codigo.substring(0, 1) == 'X') {
            numeros = 0 + codigo.substring(1, 8);
        } else if (codigo.substring(0, 1) == 'Y') {
            numeros = 1 + codigo.substring(1, 8);
        } else if (codigo.substring(0, 1) == 'Z') {
            numeros = 2 + codigo.substring(1, 8);
        } else {
            numeros = codigo.substring(0, 8);
        }       
        
        return  letraFinal == terminaciones[parseInt(numeros) % 23];

    } else {
        return false;
    }
}


addEventListener('load', inicio, false);

function inicio() {
    btnComprobar.addEventListener('click', comprobar, false);
}

function comprobar(){
    if(comprobarNif(nif.value)){
        alert("El DNI es valido");
    }else{
        alert("El DNI no es valido")
    }
}

