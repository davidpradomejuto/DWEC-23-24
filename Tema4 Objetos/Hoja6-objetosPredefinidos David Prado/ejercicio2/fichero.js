/* 
Crea una página web con un script que calcule los milisegundos que han
pasado desde las 00.00 h del 1 de enero del 2000 hasta la fecha actual.
*/



var fecha= new Date(2000,1,1,0,0,0); 
var ahora = new Date();
var ms = ahora - fecha;

document.write(`Desde el 1 de enero de 2000 han pasado ${ms} milisegundos`);