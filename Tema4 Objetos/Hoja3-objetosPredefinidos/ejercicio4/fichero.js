/* 
Diseña una expresión regular que valide un precio en € con dos decimales.
Debe permitir utilizar como carácter separador tanto el punto como la coma, y
debe haber un espacio en blanco entre el precio y el carácter €.
*/


function validarPrecio(cadena){
let regex = /^[\d]{1,2}\.[\d]{2}\s€$/;

    if(regex.test(cadena)){
        console.log(`La cadena '${cadena}' es valida`);
    }else{
        console.log(`La cadena '${cadena}' no es valida`);
    }
}
validarPrecio("1.13 €");

validarPrecio("1.23€");
