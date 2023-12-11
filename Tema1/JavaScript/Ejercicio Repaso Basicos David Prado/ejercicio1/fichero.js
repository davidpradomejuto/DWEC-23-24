
var valores = 4;
var suma = 0;
var producto=1;


var i = 1
while(i<=valores){
  let digito = prompt("Indica el numero "+i);
    if(digito == null || isNaN(parseInt(digito)) || digito <1){

    }else{
        suma+=parseInt(digito);
        producto*=parseInt(digito);
        
        console.log(`Digito ${i} es ${digito}`);
        i++;
    }
}

console.log(` La suma es ${suma} y el producto es ${producto}`);

