addEventListener('load', inicio, false);

function inicio() {
    btnPedidoTotal.addEventListener("click", calcularPedido, false);
    btnPedido.addEventListener("click", aniadirPedido, false);
    btnLimpiar.addEventListener("click", limpiar, false);
}

var nHamburguesas=0;

function aniadirPedido() {

    var carne = "";
    //saco el tipo de carne
    switch (tipoCarne.selectedIndex) {
        case 0:
            carne="Ternera";
            break;
        case 1:
            carne="Cerdo";
            break;
        case 2:
            carne="Pollo";
            break;
    }

    var tamanio ="";
    //saco el tamanio de la hamburguesa
    if(tNormal.selected){
        tamanio = "normal";
    }else{
        tamanio = "XL";
    }

    var ingredientes = "";
    if(vegetal.checked){
        ingredientes += " Vegetal ";
    }
    if(queso.checked){
        ingredientes += " Queso ";
    }
     if(jamon.checked){
        ingredientes += " Jamon ";
    }

    infoHamburguesa.value += carne+","+tamanio+","+ingredientes+"\n";


    nHamburguesas++;
}

function calcularPedido() {
    total.value=nHamburguesas;
}

function limpiar() {
    infoHamburguesa.value = "";
    total.value = "";
}
