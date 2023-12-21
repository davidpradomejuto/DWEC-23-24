/* 
Escribe un programa que le muestre un recordatorio al usuario cada cinco
segundos. 
Mientras el usuario pulse en Aceptar, el recordatorio continuará.

Cuando el usuario pulse en Cancelar, el recordatorio se anulará.
*/

function mostrarRecordatorio() {
    var resp = confirm('recordatorio . Quieres seguir recibiendo recordatorios?');
    if (!resp) {
        clearInterval(recordatorioInterval);
    }
}

var recordatorioInterval = setInterval(mostrarRecordatorio, 5000);