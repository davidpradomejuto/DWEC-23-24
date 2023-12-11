
var j = true

var factura = 0;

while (j) {
    var cantidad = prompt("Indica el cantidad de producto");

    if (cantidad.match(/[0-9]*/) && cantidad != null && !isNaN(parseInt(cantidad)) && parseInt(cantidad) >= 0) { //valido si la cadena coincide con cantidads

        if (cantidad == 0) {
            j = false;
            document.write(`La factura asciende a ${factura} €`);
        } else {

            var precio = prompt("Indica el precio del producto");
            if (precio.match(/[0-9\,]*/) && precio != null && !isNaN(parseFloat(precio)) && parseInt(precio) > 0) {

                factura += (parseInt(cantidad)*parseFloat(precio));
            }
        }
    } else {
        alert("Error. introduce una cantidad valida");
    }
}


