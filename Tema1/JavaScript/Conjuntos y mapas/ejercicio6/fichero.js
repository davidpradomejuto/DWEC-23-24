/*
La lista de seguidores de una cuenta en redes sociales se gestiona usando conjuntos.

Crea un conjunto vacío llamado Followers,
 añade el nombre de cinco seguidores,
elimina dos de ellos, añade otros siete,
 muestra cuántos seguidores tiene la cuenta y también el nombre de todos ellos.
*/
var followers = new Map(); 
followers.set(1, "David");
followers.set(2, "Cesar");
followers.set(3, "Javi");
followers.set(4, "Luis");
followers.set(5, "Pedro");

for (var i = 1; i <= 2;i++){
    followers.delete(i);
}

followers.set(6, "Iker");
followers.set(7, "Asier");
followers.set(8, "Adrian");
followers.set(9, "Eloy");
followers.set(10, "Hugo");
followers.set(11, "Efren");
followers.set(12, "Tania");

console.log(`El conjunto personas tiene ${followers.size}`);

for (let [indice,nombre] of followers) {
    console.log(`nombre -> ${nombre}`);
}