
var i = 0
while (i < 1) {
    var digito = prompt("Indica la Edad:");
    if (digito == null || isNaN(parseInt(digito))) {
    } else {
        var digitoInt = parseInt(digito);
        switch (true) {
            case digitoInt <= 12:
                console.log(`Tienes ${parseInt(digito)} años eres un niño`);
                break;
            case digitoInt >= 13 && parseInt(digito) < 26:
                console.log(`Tienes ${parseInt(digito)} años eres un jove`);

                break;
            case digitoInt >= 26 && parseInt(digito) < 60:
                console.log(`Tienes ${parseInt(digito)} años eres un adulto`);

                break;
            case digitoInt >= 60:
                console.log(`Tienes ${parseInt(digito)} años eres un jubilado`);
                break;

            default:
                console.log(`Algo ha salido mal`);
                break;
        }
        i++;
    }

}



