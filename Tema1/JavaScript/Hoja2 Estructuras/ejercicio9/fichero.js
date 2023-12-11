var primerArray = [1, 3, 6];
var segundoArray = [1, 3, 6];

//ordeno el array
primerArray.sort();
//ordeno el array
segundoArray.sort();

var iguales = true;

if (primerArray.length == segundoArray.length) {

    for (let i = 0; i < primerArray.length; i++) {

        primerArray[i] === segundoArray[i] ? iguales = true : iguales = false;
    }

    if (iguales) {
        document.write(`Los Arrays son iguales`);
    } else {
        document.write(`Los Arrays no son iguales`);
    }
} else {
    document.write(`Los Arrays no son iguales`);
}



