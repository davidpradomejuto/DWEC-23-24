
var valores = 2;
var n1=0;
var n2=0;

var suma = 0;
var diferencia = 0;




var i = 1
while(i<=valores){
  let digito = prompt("Indica el numero "+i);
    if(digito == null || isNaN(parseInt(digito))){

    }else{
        console.log(`Nota ${i} es ${digito}`);
        if (i == 1){
            n1 = parseInt(digito);
        }else{
            n2 = parseInt(digito);
        }
        i++;
    }

}

if(n1>n2){
    console.log(`La suma de  ${n1}  y ${n2} es ${n1+n2}`);
    console.log(`La diferencia entre  ${n1}  y ${n2} es ${n1-n2}`);

}else{
    console.log(`El producto de  ${n1}  y ${n2} es ${n1*n2}`);
    console.log(`La división de  ${n1}  y ${n2} es ${n1/n2}`);
}



