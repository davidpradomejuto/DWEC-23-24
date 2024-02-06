addEventListener('load', () => {
    var imagen = document.querySelector('img');
    function cambiarImagen(numero) {
        imagen.src = "./imagenes/"+numero + ".jpg";
    }
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "1":
                cambiarImagen(event.key);
                break;
            case "2":
                cambiarImagen(event.key);
                break;
            case "3":
                cambiarImagen(event.key);
                break;
            case "4":
                cambiarImagen(event.key);
                break;
            case "5":
                cambiarImagen(event.key);
                break;
            case "6":
                cambiarImagen(event.key);
                break;
            case "7":
                cambiarImagen(event.key);
                break;
            case "8":
                cambiarImagen(event.key);
                break;
            case "9":
                cambiarImagen(event.key);
                break;
            default:
                cambiarImagen(0);
                break;
        }
    });
});