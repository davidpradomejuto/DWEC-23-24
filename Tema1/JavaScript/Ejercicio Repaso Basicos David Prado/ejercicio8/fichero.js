
var i = true

//mientra i sea true, el bucle seguira, esto lo hago por que la funcion confirma mada un true si el
//usuario da el ok al confirm, si el numero intriducido por el usuario es 30 , i pasa a ser false y se para el bucle
while (i) {
    var digito = prompt("Introduce un numero para saber si es par o no");
    if (digito != null && !isNaN(parseInt(digito)) && parseInt(digito)>0) {

        if(parseInt(digito) % 2 == 0){
           alert(`El numero ${digito} es PAR` );

        }else{
            alert(`El numero ${digito} es IMPAR` );
        }
        i = false;
    }

}





