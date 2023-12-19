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

// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
  
// document.write(fecha.toLocaleDateString('es-ES', options));


document.write("Fecha: "+actual.getDay()+"/"+actual.getMonth()+"/"+actual.getFullYear()+"<br>");

var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var meses = ['Enero', 'Febrero', 'Marzo ', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write("Fecha: "+dias[actual.getDay()]+", "+actual.getDay()+"/"+actual.getMonth()+"/"+actual.getFullYear()+"<br>");
document.write("Fecha: "+dias[actual.getDay()]+", "+actual.getDay()+" de "+meses[actual.getMonth()]+" de "+actual.getFullYear()+"<br>");