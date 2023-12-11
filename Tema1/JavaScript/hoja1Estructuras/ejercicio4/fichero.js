
var numeros = [];
for (var i = 0; i < 100 ; i++){
    numeros[i] = Math.floor(Math.random() * 100);
}

for(let j in numeros){
    if(numeros[j] % 2 ==0){
        document.write(`${numeros[j]} , `);
    }
}