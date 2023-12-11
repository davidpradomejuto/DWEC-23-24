var dias = parseInt(prompt("Indica la cantidad de dias"));
var horas = parseInt(prompt("Indica la cantidad de segundos"));
var minutos = parseInt(prompt("Indica indica la cantidad de minutos"));

var segundos =parseInt((dias*86400)+(horas*3600)+(minutos*60));

confirm(`${dias} dias , ${horas} horas y ${minutos} minutos son ${segundos} segundos`);