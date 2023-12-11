
var localidades = ['astillero','torrelavega','santander','suances','unquera'];

for (let i = 0; i < localidades.length; i++) {
    
    if(i%2==0 || i==0){
        document.write(`posicion ${i} corresponde a ${localidades[i]}<br>`);
    }
    
}
