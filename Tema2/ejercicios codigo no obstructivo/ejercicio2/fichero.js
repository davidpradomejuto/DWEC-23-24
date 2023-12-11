addEventListener('load', inicio, false);

function inicio() {
    botobtnDatosn1.addEventListener("click", mostrarDatos, false);
    btnLimpiar.addEventListener("click", limpiar, false);
}

function mostrarDatos() {
    if (n1.value.length == 0 || n2.value.length == 0 ||  n3.value.length == 0 || n4.value.length == 0){ 
       alert("Completa todos los campos");  	
    }else{
   
    datos.value = parseInt(n1.value)+ parseInt(n2.value)+ parseInt(n3.value)+ parseInt(n4.value);
    }
}

function limpiar(){
    n1.value="";
    n2.value="";
    n3.value="";
    n4.value="";
    datos.value = "";
    n1.focus();
}