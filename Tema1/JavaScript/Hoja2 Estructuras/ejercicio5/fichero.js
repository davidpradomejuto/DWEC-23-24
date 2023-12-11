var vector = [1,4,9,2,6,4,3,6];

var multiplosDeTres = 0;

for (let i = 0; i < vector.length; i++) {

    if(  vector[i] % 3 == 0){
        multiplosDeTres++; 
    }
}

if(multiplosDeTres >= 3) {
    document.write(`Hay mas de 3 multiplos de tres`);
}else {
    document.write(`No hay mas de 3 multiplos de tres`);
}
    


 