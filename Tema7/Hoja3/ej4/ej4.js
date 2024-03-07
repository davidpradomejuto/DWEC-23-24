addEventListener('load', () => {

    var caja = document.querySelector("#caja");
    //variable para marcar si la caja esta seleccionada
    var activo = false;
    //si se mueve el raton ejecuto esto
    document.addEventListener('mousemove', (event) => {
        //si se hace click en la caja la selecciono
        caja.addEventListener('click', (event) => {
            if(!activo){
                activo = true;
            }
        });

        //si se hace doble click la deselecciono
        caja.addEventListener("dblclick", (event) => {
            if(activo){
                activo = false;
            }
        });

        if(activo){
            let x = event.clientX;
            let y = event.clientY;

            caja.style.position = 'absolute';
            caja.style.top = y+"px";
            caja.style.left = x+"px";
        }
    })
   
});

// Crea un cuadrado en el documento y haz un clic encima de él para cogerlo y doble click
// para soltarlo. Crearemos efecto de que le estamos arrastrando por la pantalla.