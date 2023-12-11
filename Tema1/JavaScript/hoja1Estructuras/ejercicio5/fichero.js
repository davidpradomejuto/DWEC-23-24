
var numeros = [];

for (let i = 0; i < 8; i++) {
    numeros[i] = prompt(`Introduce el ${i} numero`);
    
}

for(let j in numeros){
    if(numeros[j] % 2 ==0){
        document.write(`${numeros[j]} es par <br> `);
    }else{
        document.write(`${numeros[j]} es impar <br> `);

    }
}