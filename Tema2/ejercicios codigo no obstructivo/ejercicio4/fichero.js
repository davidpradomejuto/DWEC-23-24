addEventListener('load', inicio, false);

function inicio() {
    btnCalcular.addEventListener("click", calcular, false);
    btnLimpiar.addEventListener("click", limpiar, false);
}

function calcular() {
    //saco el valor del campo numero
    if (numero1.value.length == 0 || numero2.value.length == 0) {
        alert("Completa todos los campos");
    } else {

        var resultadoCalculo = 0;


        switch (true) {
            case selecion.selectedIndex == 0:
                //suma
                resultadoCalculo = parseInt(numero1.value) + parseInt(numero2.value)
                break;
            case selecion.selectedIndex == 1:
                //resta
                resultadoCalculo = parseInt(numero1.value) - parseInt(numero2.value);
                break;
            case selecion.selectedIndex == 2:
                //multiplicacion
                resultadoCalculo = parseInt(numero1.value) * parseInt(numero2.value);
                break;
            case selecion.selectedIndex == 3:
                //division
                resultadoCalculo = parseInt(numero1.value) / parseInt(numero2.value);
                break;
        }

        resultado.value = resultadoCalculo;
    }

}

function limpiar() {
    numero1.value = "";
    numero2.value = "";
    resultado.value = "";
    numero1.focus();
}
