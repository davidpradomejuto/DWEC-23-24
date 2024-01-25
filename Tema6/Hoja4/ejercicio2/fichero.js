addEventListener('load', inicio);

function inicio() {
    var sigue = true;

    while (sigue) {
        var texto = prompt('Introduce el texto');
        var posicion = prompt('Introduce la posición');
        var nParrafos = document.querySelectorAll('p');
        var contenedor = document.querySelector('#contenedor');

        if (parseInt(posicion) > nParrafos.length) {
            alert('La posición que has introducido no existe');
        } else {
            let parrafo = document.createElement('p');
            parrafo.innerText = texto;

            // Insertamos el nuevo párrafo antes del párrafo anterior
            contenedor.insertBefore(parrafo, nParrafos[parseInt(posicion) - 1]);
        }

        sigue = confirm('¿Quieres seguir?');
    }
}
