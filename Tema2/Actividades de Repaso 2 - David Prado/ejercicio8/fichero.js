
var j = true

const pOrdinario = 40;
const pExtra = 41;

while (j) {
    var nHoras = prompt("Indica el Numero de horas a la semana");
    if (nHoras.match(/[0-9]*/) && nHoras != null && !isNaN(parseInt(nHoras)) && parseInt(nHoras) > 0) { // valido la entrada que sea entera positiva
        //convierto el dato en entero
        nHoras = parseInt(nHoras);
        //si tiene mas de 40 horas calculo el numero de horas extras, sino simplemente multiplico las horas por el precio yl o muestro
        if(nHoras > 40){

            let nHorasExtra = nHoras-40;

            document.write(`El salario semanal del trabajador es de ${nHoras * pOrdinario} € habiendo trabajado ${nHoras} ordinarias <br>`);
            document.write(`+ ${nHorasExtra * pExtra} € habiendo trabajado ${nHorasExtra} extra <br>`);


        }else{
            document.write(`El salario semanal del trabajador es de ${nHoras * pOrdinario} € habiendo trabajado ${nHoras} ordinarias <br> `);
        }

        j=false;
    }else{
        //si la validacion no es correcta saco un mensaje
        alert("Introduce un numero valido de horas, debe ser entero y positivo");
    }

    
}