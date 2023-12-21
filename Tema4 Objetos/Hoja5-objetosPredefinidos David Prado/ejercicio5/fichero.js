/* 
Objeto WINDOW. Crea una guía que sirva para
a. Abrir una nueva ventana y configurarla
b. Cerrar ventana.
c. Colocar o desplazar una ventana
*/
//se abre una nueva ventana en una posicion y tamaño especificos
let ventanaNueva = window.open('https://www.google.com/', '_blank', 'top=50,left=50,width=800,height=600');

//cierra la ventana abierta previamente, comendo el comando para probarlo
//ventanaNueva.close();

//mueve la ventana a una nueva posicion en la pantalla
ventanaNueva.moveTo(100, 100);

//redimensiona la ventana a un nuevo tamaño
ventanaNueva.resizeTo(900, 700);