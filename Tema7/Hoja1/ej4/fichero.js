addEventListener('load', () => {

    var formulario = document.querySelector('form');

    var enviar = document.querySelector('#enviar');
    var reiniciar = document.querySelector('#reiniciar');
    var alerts = document.querySelector('#alerts');

    var correo = formulario.elements["correo"];
    var usuario = formulario.elements["usuario"];
    var contra = formulario.elements["contra"];

    enviar.addEventListener("click", (objeto) => {

        var patron = /@/;

        if (patron.test(correo)) {
            formulario.submit();
        } else {
            alert("Correo incorrecto, debe contener una @");
            objeto.preventDefault();
        }
    });

    function limpiarAlerts() {
        alerts.innerHTML = "";
    }

    usuario.addEventListener("focus", (event) => {
        alerts.style.color = "red";
        alerts.innerHTML = "El usuario es obligatorio"
    });
    contra.addEventListener("focus", (event) => {
        alerts.style.color = "red";
        alerts.innerHTML = "la contraseña es obligatoria"
    });

    usuario.addEventListener("blur", (event) => {
        limpiarAlerts()
    });
    contra.addEventListener("blur", (event) => {
        limpiarAlerts()
    });

    reiniciar.addEventListener("click", () => {
        formulario.reset();
    });

});