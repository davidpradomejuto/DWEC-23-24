addEventListener('load', inicio, false);

function inicio() {
    boton1.addEventListener("click", mostrarDatos, false);
    boton2.addEventListener("click", limpiar, false);
}

function mostrarDatos() {
    datos.value = nombre.value + " " + apellidos.value;
}

function limpiar(){
    nombre.value="";
    apellidos.value="";
    datos.value = "";

    nombre.focus();
}