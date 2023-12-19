/* 
Mostrar la hora actual de varias maneras diferentes (hora completa, formato
24h, formato AM/PM, etc.).
*/


var fecha = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
document.write(fecha.toLocaleDateString('es-ES', options));

document.write("Hora: "+fecha.getHours()+"<br>");

document.write("Hora: "+fecha.getHours()+":"+fecha.getMinutes()+"<br>");

document.write("Hora: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"<br>");

document.write("Hora formato 12 "+fecha.toLocaleString('mm'));