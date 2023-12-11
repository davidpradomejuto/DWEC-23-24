
var i = true

//mientra i sea true, el bucle seguira, esto lo hago por que la funcion confirma mada un true si el
//usuario da el ok al confirm, si el numero intriducido por el usuario es 30 , i pasa a ser false y se para el bucle
while (i) {
    var digito = prompt("Indica el resultado de la suma 15+15");
    if (digito != null && !isNaN(parseInt(digito))) {

        if(parseInt(digito) === 30){
            console.log(`El resultado ${digito} es CORRECTO` );
            i = false;
        }else{
            var i =  confirm("Quieres seguir intentandolo?");
        }
     
    }

}





