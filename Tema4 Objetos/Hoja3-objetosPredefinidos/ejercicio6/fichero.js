/* 
Escribe una expresión regular que permita validar URL de sitios web, cuyos
requisitos son que empiece por https://, que termine en .es y en medio no haya
ninguna “ñ”.
*/


function validarUrl(cadena){
let regex = /^[https://][\D][^ñÑ\s]+[.es]$/;
    if(regex.test(cadena)){
        console.log(`La cadena '${cadena}' es valida`);
    }else{
        console.log(`La cadena '${cadena}' no es valida`);
    }
}
validarUrl("https://drivegoogle.es");

validarUrl("https://drivegoogle.com");


validarUrl("https://driveñgoogle.es");

validarUrl("https://drive google.es");
