var n1 = 0;
var n2 = 0;

var i = 1
while (i <= 2) {
    var digito = prompt(`Introduce el numero ${i}`);
    if (digito != null && !isNaN(parseInt(digito))) {
        if (i == 1) {
            n1 = parseInt(digito);
        } else {
            n2 = parseInt(digito);
        }
        i++;
    }
}

var x = true;
while (x) {
    var eleccion = prompt(`Introduce la operacion que quieres hacer 
    1 - suma
    2 - resta
    3 - multiplicacion
    4 - division`);

    if (eleccion != null && !isNaN(parseInt(eleccion)) && parseInt(eleccion) > 0 && parseInt(eleccion) <= 4) {

        switch (true) {
            case eleccion==1:
                console.log(`la suma de ${n1} y ${n2} es ${n1 + n2}`);
                break;
            case eleccion==2:
                console.log(`la resta de ${n1} y ${n2} es ${n1 - n2}`);

                break;
            case eleccion==3:
                console.log(`la multiplicacion de ${n1} y ${n2} es ${n1 * n2}`);

                break;
            case eleccion==4:
                console.log(`la division de ${n1} y ${n2} es ${n1 / n2}`);
                break;

            default:
                console.log(`Algo ha salido mal`);
                break;
        }
        x=false;
    }
}


