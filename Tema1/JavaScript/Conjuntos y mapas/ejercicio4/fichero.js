/*
Crea un mapa vacío y añade los DNI de diez personas ficticias, usando el DNI como
clave y el nombre como valor.

 A continuación, muestra en pantalla la lista de todos los DNI junto con el nombre de las personas.
  Modifica el nombre de la tercera persona y vuelve a mostrar todos los datos en pantalla 
  para comprobar que la operación se ha realizado correctamente.
*/
var personas = new Map(); 
personas.set("71197272H", "David");
personas.set("72197272U", "Cesar");
personas.set("73197272E", "Luis");
personas.set("74197272T", "Pedro");
personas.set("75197272F", "Alvaro");
personas.set("76197272A", "Tania");
personas.set("77197272Y", "Javi");
personas.set("78197272G", "Efren");
personas.set("79197272P", "Hugo");
personas.set("80197272L", "Eloy");

for (let [dni,nombre] of personas) {
    console.log(`El dni es ${dni} y el nombre es ${nombre}`);
}

console.log("Modifico el nombre de la tercera persona");

personas.set("73197272E", "Modificado");

for (let [dni,nombre] of personas) {
    console.log(`El dni es ${dni} y el nombre es ${nombre}`);
}