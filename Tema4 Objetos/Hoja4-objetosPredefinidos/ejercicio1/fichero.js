/* 
Realizar un scipt que visualice la fecha actual con diferentes formatos. Para la
visualización utilizar párrafos.
*/


var actual = new Date();
document.write("Fecha completa: "+actual.toString()+"<br>");
document.write("dia mes: "+actual.getDate()+"<br>");
document.write("dia semana: "+actual.getDay()+"<br>");
document.write("Mes: "+actual.getMonth()+"<br>");
document.write("Año: "+actual.getFullYear()+"<br>");


document.write("Fecha: "+actual.getFullYear()+"<br>");

document.write("Fecha: "+actual.getFullYear()+"<br>");