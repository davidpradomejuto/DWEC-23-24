document.write("<br>Pruebo con el FOR <br>");

for (let i = 0; i <= 100; i++) {
    
    if(i%7 != 0 && i%3 !=0){
        document.write(i+" ");
    }
    
}
document.write("<br>Pruebo con el while <br>");

var i = 0;
while ( i <= 100) {
    
    if(i%7 != 0 && i%3 !=0){
    document.write(i+" ");
    }
    i++
}
document.write("<br>Pruebo con el do while <br>");

i = 0;
do {
    
    if(i%7 != 0 && i%3 !=0){
        document.write(i+" ");
    }
    i++
}while ( i <= 100);