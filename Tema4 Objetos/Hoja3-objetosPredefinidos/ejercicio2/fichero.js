/* 
Crea una función que haciendo uso de las expresiones regulares permita
validar el formato de una dirección de correo electrónico. Recuerda que estas
son las normas que validan un correo electrónico:

a. El carácter @ es obligatorio; separa la primera parte (izquierda) de la
segunda (derecha)

b. La primera parte:
    i. Acepta letras minúsculas y mayúsculas, caracteres numéricos y
    los caracteres especiales # * + &amp; ‘ ¡ % ¿ {^} “
    ii. Acepta todos los caracteres punto que se deseen, pero no
    puede ser ni el primer ni el último carácter, y tampoco pueden ir
    seguidos.

c. La segunda parte acepta puntos, dígitos, guiones y letras
*/




function validarEmail(cadena){
let regex = /^\w+([\.-]?\w+)@([\.-]?\w+)*(\.\D{2,3}$)/;

    if(regex.test(cadena)){
        console.log(`La cadena ${cadena} es valida`);
    }else{
        console.log(`La cadena ${cadena} no es valida`);
    }
}
validarEmail("hola@tu.casa.net");

validarEmail(".hola@tu.casa.net");
