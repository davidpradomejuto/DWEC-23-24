/* 
Crea un formulario con 2 botones, el primero abrirá una nueva ventana de
200x30. El segundo cerrará esta ventana.
*/



addEventListener('load', inicio, false);

function inicio() {
    abrir.addEventListener('click', abrirVentana, false);
    cerrar.addEventListener('click', cerrarVentana, false);
    
}
var ventanaNueva;

function abrirVentana(){
    ventanaNueva = window.open();

}
function cerrarVentana(){
    ventanaNueva.close();
}