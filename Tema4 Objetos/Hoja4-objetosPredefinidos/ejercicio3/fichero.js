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
  
document.write("hora formato español largo: "+fecha.toLocaleDateString('es-ES', options)+"<br>");

document.write("Hora formato 24: "+fecha.getHours()+"<br>");

document.write("Hora: "+fecha.getHours()+":"+fecha.getMinutes()+"<br>");

document.write("Hora: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"<br>");

document.write("Hora formato 12: "+fecha.toLocaleString('mm')+"<br>");

document.write("Hora formato AM/PM: "+fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })+"<br>");
