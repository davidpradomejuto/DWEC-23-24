/*
Durante el desarrollo de una aplicación se ha detectado la necesidad de almacenar la
información de geolocalización de varias ciudades. 

Tienes que crear un mapa cuyas claves sean el nombre de las ciudades y los valores, la longitud y 
latitud de cada ciudad.

Crea la estructura de datos, rellénala con datos de cinco ciudades reales y muestra en pantalla 
la información que contiene el mapa.
*/
var ciudades = new Map(); 

ciudades.set("Santander", "2375 8261");
ciudades.set("Madrid", "7294 4467");
ciudades.set("Barcelona", "3288 1773");
ciudades.set("Bilbao", "1188 5587");
ciudades.set("Sevilla", "5587 2285");



for (let [nombre,coordenadas] of ciudades) {
    console.log(`El Nombre de la ciudad es  ${nombre} y sus coordenadas son '${coordenadas}'`);
}
