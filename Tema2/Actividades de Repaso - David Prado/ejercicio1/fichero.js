var i = true
var j = true
let regex = /^[a-zA-Z]+$/; 
while (j) {
    var nombre = prompt("Indica el nombre:");
    if (nombre != null && regex.test(nombre) == true) {
        j = false;
    }

}


while (i) {
    var digito = prompt("Indica la Edad:");
    if (digito != null && !isNaN(parseInt(digito))) {
        var digitoInt = parseInt(digito);
        switch (true) {
            case digitoInt <= 12:
                confirm(`${nombre} tiene ${parseInt(digito)} años por tanto es un niño`);
                break;
            case digitoInt >= 13 && parseInt(digito) < 17:
                confirm(`${nombre} tiene ${parseInt(digito)} años por tanto es un adolescente`);

                break;
            case digitoInt >= 18 && parseInt(digito) < 64:
                confirm(`${nombre} tiene ${parseInt(digito)} años por tanto es un trabajador`);

                break;
            case digitoInt >= 65:

                confirm(`${nombre} tiene ${parseInt(digito)} años por tanto es un Jubilado`);
                break;

            default:
                console.log(`Algo ha salido mal`);
                break;
        }
        i = false;
    }else{
        alert("Error. introduce una edad valido");
    }

}

