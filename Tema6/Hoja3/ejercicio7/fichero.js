/* 
Realiza una página con dos secciones con texto y las opciones necesarias para:
a. Aumentar el tamaño de fuente de toda la página
b. Volverla a poner a su tamaño normal
c. Cambiar el color de fondo
d. Volver a poner el original

e. Lo mismo que las opciones anteriores, pero para una sección determinada
f. Cambiar el tipo de letra para una sección
*/
addEventListener('DOMContentLoaded', inicio);

var select;
var parrafo1;
var parrafo2;

function inicio() {

    select = document.querySelector('select');

    parrafo1 = document.querySelectorAll('section')[0].querySelector('p');
    parrafo2 = document.querySelectorAll('section')[1].querySelector('p');

    btnAumentarGeneral.addEventListener('click', generalAumentar);
    btnNormalizarGeneral.addEventListener('click', generalNormalizar);
    btnCambiarColorGeneral.addEventListener('click', generalCambiarColor);
    btnColorOriginalGeneral.addEventListener('click', generalColorOriginal);

    btnAumentarIndividual.addEventListener('click', individualAumentar);
    btnNormalizarIndividual.addEventListener('click', individualNormalizar);
    btnCambiarColorIndividual.addEventListener('click', individualCambiarColor);
    btnColorOriginalIndividual.addEventListener('click', individualColorOriginal);
    btnCambiarLetra.addEventListener('click',individualCambiarLetra)
}

function generalAumentar() {

    const tamanio = 30;

    document.querySelectorAll('p').forEach(element => {
        element.style.fontSize = tamanio + "px";
    });

}

function generalNormalizar() {
    document.querySelectorAll('p').forEach(element => {
        element.style.fontSize = "initial";
    });
}

function generalCambiarColor() {

    var color = document.querySelector('#rangoColor').value;

    document.querySelectorAll('p').forEach(element => {
        element.style.backgroundColor = color;
    });

}

function generalColorOriginal() {
    document.querySelectorAll('p').forEach(element => {
        element.style.backgroundColor = "initial";
    });
}

function individualAumentar() {
    const opcion = select.value;
    const tamanio = 30;

    switch (opcion) {
        case '1':
            parrafo1.style.fontSize = tamanio + "px";
            break;
        case '2':
            parrafo2.style.fontSize = tamanio + "px";
            break;
        default:
            console.log('Error al aumentar tamaño');
    }
}

function individualNormalizar() {
    const opcion = select.value;

    switch (opcion) {
        case '1':
            parrafo1.style.fontSize = "initial";
            break;
        case '2':
            parrafo2.style.fontSize = "initial";
            break;
        default:
            console.log('Error al normalizar tamaño');
    }
}

function individualCambiarColor() {
    const opcion = select.value;
    const color = document.querySelector('#rangoColor').value;


    switch (opcion) {
        case '1':
            parrafo1.style.backgroundColor = color;
            break;
        case '2':
            parrafo2.style.backgroundColor = color;
            break;
        default:
            console.log('Error al cambiar el color');
    }
}

function individualColorOriginal() {
    const opcion = select.value;

    switch (opcion) {
        case '1':
            parrafo1.style.backgroundColor = "initial";
            break;
        case '2':
            parrafo2.style.backgroundColor = "initial";
            break;
        default:
            console.log('Error al cambiar el color a original');
    }
}

function individualCambiarLetra() {
    const opcion = select.value;

    switch (opcion) {
        case '1':
            parrafo1.style.fontFamily = "arial";
            break;
        case '2':
            parrafo2.style.fontFamily = "arial";
            break;
        default:
            console.log('Error al Cambiar la fuente de letra');
    }
}

