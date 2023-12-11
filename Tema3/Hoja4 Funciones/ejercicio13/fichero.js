/* 
Crea una aplicación que pida al usuario palabras continuamente hasta que se acepte el
cuadro sin texto o se cancele.

Se eliminarán las palabras repetidas y además se ordenarán en español,
 pero en orden inverso (de la Z a la A).
 */



function ordenarZA(palabras) {
    palabras = [];
    //ahora saco las palabras de la lista a un array para ordenarlos alfabeticamente y 
    //darles la vuelta
    for (const palabra of lista) {
        palabras.push(palabra);
    }

    //las ordeno y doy la vuelta
    palabras.sort().reverse();

    return palabras;
}


var sigue = true;
//creo una lista para meter la palabras y no tener duplicados
let lista = new Set();


while (sigue) {
    //pido la letra
    let palabra = prompt("Introduce un una palabra");

    //si se da al boton de cancelar o se mete un texto vacio sale del bucle y ejecuta
    // la funcion
    if (palabra != '' && palabra != null) {
        //añado la palabra a la lista
        lista.add(palabra);

    } else {
        sigue = false;

        //guardo la el array de palabras ordenadas y le muestro
        let resultado = ordenarZA(lista);

        for (let palabra of resultado) {
            document.write(`${palabra}<br>`);
        }

    }
}








