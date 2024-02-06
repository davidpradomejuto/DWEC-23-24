addEventListener('load', () => {

    var formulario = document.forms[0];

    var enviar = document.querySelectorAll("a")[0];
    var res = document.querySelectorAll("a")[1];

    enviar.addEventListener("click", (objeto) => {

        var correo = document.forms[0].elements["correo"].value;

        var patron = /@/;

        if (patron.test(correo)) {
            formulario.submit();
        } else {
            alert("Correo incorrecto, debe contener una @");
            objeto.preventDefault();
        }

    });

    res.addEventListener("click", () => {
        formulario.reset();
    });

});