/* 
Poner un reloj a tiempo real en la página.
*/


addEventListener('load', inicio, false);


function inicio() {
  
  var recordatorioInterval = setInterval(reloj, 1000);

}


function reloj(){
    var fecha = new Date();

    var dia = fecha.getDate();
    var mes = fecha.getUTCMonth()+1;
    var anio = fecha.getFullYear();

    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();


    document.getElementById('dia').innerHTML = dia;
    document.getElementById('mes').innerHTML = '-'+mes;
    document.getElementById('anio').innerHTML = '-'+anio;
    document.getElementById('hora').innerHTML = '\xa0'+hora;
    document.getElementById('minuto').innerHTML = ':'+minuto;
    document.getElementById('segundo').innerHTML = ':'+segundo;

}
