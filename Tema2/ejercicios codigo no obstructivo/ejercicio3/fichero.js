addEventListener('load', inicio, false);

var Sumatotal = 0;

function inicio() {
    btnOtro.addEventListener("click",otroNumero, false);
    btnTotal.addEventListener("click",calcularTotal, false);
    btnLimpiar.addEventListener("click", limpiar, false);
}

function otroNumero() {
    //saco el valor del campo numero
    if (numero.value.length == 0)
    { 
       alert("El campo numero esta vacio");  	
    }  	else{

        //le sumo 
        Sumatotal += parseInt(numero.value);
    
        //le soy el valor del numero a la text area cadena
        cadena.value = cadena.value+numero.value+" ";
    
        //pongo el valor del campo numero vacio
        numero.value = '';
    }
   
}

function calcularTotal() {
    //cogo el objeto del input "total"
    //le doy el valor de la suma de los numeros
    total.value = Sumatotal;
}
function limpiar(){
    total.value="";
    numero.value="";
    cadena.value = "";
    numero.focus();
}