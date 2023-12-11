
var valores = 2;
var n1=0;
var n2=0;

var suma = 0;
var diferencia = 0;
var pattern = /^-?\d*(\.\d+)?$/;



var i = 0
while(i<1){
  let digito = prompt("Indica el numero");
    if(digito != null || !isNaN(parseInt(digito)) ){

        if(parseInt(digito) === 0){
            console.log("El numero es 0");
        }else if(parseInt(digito) < 0){
            console.log(`El numero ${digito} es negativo`);
        }else{
            console.log(`El numero ${digito} es positivo`);
        }
        i++;
    }else{
       document.write("if");
    }

}




