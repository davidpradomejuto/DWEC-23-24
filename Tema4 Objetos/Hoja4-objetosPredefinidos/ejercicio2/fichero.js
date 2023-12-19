/* 
Se pide:
a. Introducir dos fechas. Calcular la diferencia en días y minutos entre
ambas.
b. Introducir una fecha cualquiera (por ejemplo, de nacimiento).
c. La edad de esa persona
Obtener
a. El mes y día de la semana (en letras) de esa fecha
b. La diferencia GMT
c. La fecha completa del inicio de esa semana
*/


addEventListener('load', inicio, false);

function inicio() {
    btnCalcularEdad.addEventListener('click', calcularEdad, false);
    btnDiaDeLaSemana.addEventListener('click', diaDeLaSemana, false);
    btnMes.addEventListener('click', mes, false);
    btnDifGmt.addEventListener('click', difGmt, false);
    btnInicioSemana.addEventListener('click', inicioSemana, false);
    btnDiferenciaFechas.addEventListener('click', diferenciaFechas, false);
}

function calcularEdad() {
    let fecha = new Date(fecha1.value);
    let segundosNacimiento = Date.now() - fecha;
    let edad = Math.floor(segundosNacimiento / 1000 / 60 / 60 / 24 / 365.25);
    resultado.value = edad + " años";
}

function diaDeLaSemana() {
    let fecha = new Date(fecha1.value);
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    resultado.value = "Dia de nacimiento : " + dias[fecha.getDay()];
}

function mes() {
    let fecha = new Date(fecha1.value);
    var meses = ['Enero', 'Febrero', 'Marzo ', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    resultado.value = "Mes de nacimiento : " + meses[fecha.getMonth()];
}

function difGmt() {
    resultado.value = "hay una diferencia de :" + new Date().getTimezoneOffset() +" minutos frente a la hora UTC/GMT";
}

function inicioSemana() {
    let fecha = new Date(fecha1.value);
    let msInicioSemanta = fecha-fecha.getDay()*86400000;
    let fechainicio= new Date(msInicioSemanta);
    resultado.value = "Fecha de inicio de la semana : " + fechainicio;
}

function diferenciaFechas() {
    let fechainicio = new Date(fecha1.value);
    let fechafin = new Date(fecha2.value);
    let diferencia=0;
    //reviso si una fehca es antes que la otra para cambiar el orden de la resta y siempre de positivo
    if (fechainicio>fechafin){
        diferencia = fechainicio - fechafin;
    }else{
        diferencia = fechafin - fechainicio;
    }
    //muestro la diferencia en dias
    resultado.value = Math.floor(diferencia / 1000 / 60 / 60 / 24 )+" dias de diferencia";
}
