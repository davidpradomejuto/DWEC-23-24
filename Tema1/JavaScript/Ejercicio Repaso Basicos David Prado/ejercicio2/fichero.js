var nota=0;
var valores = 3;
var suma = 0;



var i = 1
while(i<=valores){
  let digito = prompt("Indica la nota "+i);
    if(digito == null || isNaN(parseInt(digito)) || digito <0 || digito >10){

    }else{
        suma+=parseInt(digito);
        console.log(`Nota ${i} es ${digito}`);
        i++;
    }

}

var media = suma/3;
media = parseFloat(media).toFixed(2);

if(media >= 7){ 
console.log(` La media es ${media} , Promociona`);
}else{
    console.log(` La media es ${media} ,No Promociona`);
}


