/* 
Escribe una expresión regular que valide solo las letras del castellano: debe
incluir mayúsculas, minúsculas y caracteres con tilde, pero no espacios en
blanco.
*/


function validarCastellano(cadena){
let regex = /^[A-Za-zñÑáúíóéÁÉÍÓÚüÜ]+$/;

    if(regex.test(cadena)){
        console.log(`La cadena '${cadena}' es valida`);
    }else{
        console.log(`La cadena '${cadena}' no es valida`);
    }
}
validarCastellano("hóla ad ios");

validarCastellano("holaAdíos");
