/* 
Crea una aplicación web que sirva para validar URLs. La URL está
formada por:

a. Protocolo, seguido de dos puntos y, según el protocolo, por hasta tres
barras inclinadas (/) aunque puede no haber ninguna.

b. Puede haber un nombre de usuario (no es obligatorio), que consta solo
de textos, números y/o guiones. Además, se pueden separar varias
palabras con puntos, tipo felipe.moreno por ejemplo.

c. Después del nombre de usuario, (si le hay) puede haber dos puntos
seguidos de la contraseña. En la contraseña vale cualquier serie de
caracteres. Hay que hacer notar que si hay contraseña debe haber
nombre de usuario seguido de dos puntos, pero puede haber nombre de
usuario y no haber contraseña (los dos puntos no se pondrían tampoco).

d. Si hay nombre de usuario se coloca al final de la contraseña un símbolo
de arroba. Si no hay contraseña se coloca detrás del nombre de usuario.

e. Después del nombre de la máquina, cuyos caracteres son los mismos
que para el nombre de usuario. Al menos un nombre de máquina consta
de dos palabras separadas por un punto, pero puede haber más
palabras.

f. Opcionalmente, se pueden poner dos puntos seguidos de un número de
puerto. El número de puerto es una serie de cifras numéricas.

g. También opcionalmente puede haber al final una ruta, la cual comenzaría
por el símbolo de dividir (/) y luego palabras y símbolos de dividir. Esas
palabras pueden tener puntos entre medias.

h. Se permitirá, sin ser obligatorio, que al final haya cualquier serie de
caracteres si van precedidos por el símbolo literal del cierre de
interrogación.
*/


function validarURL(url) {
    var regex = /^(http[s]?:[\/]{0,3})?([w-]+@)?([a-zA-Z0-9-.]+.)(:[0-9]+)?(\/[a-zA-Z0-9_./-]+)*(\?[a-zA-Z0-9_./-]+=*[a-zA-Z0-9_./-]+)*$/;
    return regex.test(url);
}

var textos = prompt('introduce una url valida');
document.write(`La url ${texto} es valida? ${validarURL(texto) ? 'la url es valida': ' la url no es valida'}`);

console.log(validarURL(texto));