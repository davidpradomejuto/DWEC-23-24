/* 
En un documento HTML, crea un botón que, al presionarlo, utilice el método
resizeTo(500, 500) para modificar el tamaño de la ventana.
*/

addEventListener('load', inicio, false);

function inicio() {
    btnRedimensionar.addEventListener('click', redimensionar, false);
}

function redimensionar(){
    window.resizeTo(500, 500);

}

