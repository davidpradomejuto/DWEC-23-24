
var j = true



while (j) {
    var examenes = prompt("Indica la nota de los examenes");
    if (examenes.match(/[0-10]*/) && examenes != null && !isNaN(parseInt(examenes)) && parseInt(examenes) > 0) { // valido la entrada que sea entera positiva

        //convierto el dato en entero
        examenes = parseInt(examenes);


        var practicos = prompt("Indica la nota de los practicos");
        if (practicos.match(/[0-10]*/) && practicos != null && !isNaN(parseInt(practicos)) && parseInt(practicos) > 0) { // valido la entrada que sea entera positiva

            var actitud = prompt("Indica al nota de la actitud");
            if (actitud.match(/[0-10]*/) && actitud != null && !isNaN(parseInt(actitud)) && parseInt(actitud) > 0) { // valido la entrada que sea entera positiva

                j = false; // si todas las notas estan bien metidas sale del bucle

                 var notaFinal = (examenes*0.6)+(practicos*0.3)+(actitud*0.1);  

            } else {
                //si la validacion no es correcta saco un mensaje
                alert("Error: Introduce una nota valida debe ser entre 1 y 10");
            }

        } else {
            //si la validacion no es correcta saco un mensaje
            alert("Error: Introduce una nota valida debe ser entre 1 y 10");
        }

      
    } else {
        //si la validacion no es correcta saco un mensaje
        alert("Error: Introduce una nota valida debe ser entre 1 y 10");
    }


}

switch(true){

    case notaFinal > 0 && notaFinal < 5: 
    document.write(`Tu nota es ${notaFinal} tienes un insuficiente`);
    break;

    case notaFinal >=5 && notaFinal < 6: 
    document.write(`Tu nota es ${notaFinal} tienes un suficiente`);

    case notaFinal >=6 && notaFinal < 7: 
    document.write(`Tu nota es ${notaFinal} tienes un bien`);
    break;

    case notaFinal >=7 && notaFinal < 8: 
    document.write(`Tu nota es ${notaFinal} tienes un notable`);

    break;

    case notaFinal >= 8 && notaFinal <=10 : 
    document.write(`Tu nota es ${notaFinal} tienes un sobresaliente`);

    break;

}
