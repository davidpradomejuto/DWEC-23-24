addEventListener('load', () => {

    var alto = window.screen.availHeight;
    var ancho = window.screen.availWidth;

    var div = document.querySelector('#contenedor');

    div.addEventListener("mousemove", (event) => {
        let x = event.clientX;
        let y = event.clientY;

        div.innerHTML = `coordenadas x ${x} px coordenadas y ${y} px`;
    });

    div.addEventListener("mouseup", (event) => {
        event.preventDefault();
        let boton;
        switch (event.button) {
            case 0:
                boton = 'click izquierdo'
                break;
            case 1:
                boton = 'click central'
                break;
            case 2:
                boton = 'click derecho'
                break;
        }
        div.innerHTML = `Boton pulsado ${boton}`;
    });

});

// Hacer un script donde nos aparezcan en todo momento, cuando movemos el ratón, las
// coordenadas en una zona de la pantalla.
// También debe mostrar si pulso algún botón del ratón, el valor que obtiene y el botón
// que he pulsado.