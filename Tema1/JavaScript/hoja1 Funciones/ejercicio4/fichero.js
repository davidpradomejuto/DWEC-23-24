
function EliminarDelMapa(mapa){
    for (var[cp,nombre] of mapa) {
      
        if(cp.length !=5){
            mapa.delete(cp);
        }

    }
}


var mapa = new Map();
mapa.set("39479", "Vioño de pielagos");
mapa.set("39300", "Torrelavega");
mapa.set("3947", "Santander");

EliminarDelMapa(mapa);

for (var[cp,nombre] of mapa) {
    document.write(`cp -> ${cp}, nombre -> ${nombre}<br>`);
}
/*
Escribe una función que elimine de un mapa que almacena los códigos postales de
localidades españolas todos los códigos postales que no tengan cinco dígitos. 

Crea el mapa, añade cinco localidades con un código postal erróneo y comprueba que la
función realiza su cometido correctamente.
 */