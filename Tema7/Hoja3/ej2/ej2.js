addEventListener('load', () => {
    
    var alto = window.screen.availHeight;
    var ancho = window.screen.availWidth;

    var div = document.querySelector('#contenedor');

    div.addEventListener("mouseover", (event) => {

        let altoAleatorio = Math.floor(Math.random() * alto);
        let anchoAleatorio = Math.floor(Math.random() * ancho);

        div.style.top = altoAleatorio+"px";
        div.style.left = anchoAleatorio+"px";

    });
});