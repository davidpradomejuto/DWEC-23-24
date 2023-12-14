/* 
Crea una expresión regular que valide una hora en formato HH:MM de 24
horas, donde HH representa las horas y MM los minutos.
*/


function validarHora(cadena){
let regex = /^(0|1?[0-9]|2?[0-3])\:[0-5]{1}[0-9]{1}$/;
    if(regex.test(cadena)){
        console.log(`La cadena '${cadena}' es valida`);
    }else{
        console.log(`La cadena '${cadena}' no es valida`);
    }
}
validarHora("23:13");

validarHora("12:23");
