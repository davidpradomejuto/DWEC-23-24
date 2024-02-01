/* 
Haz una página que pida una fecha usando la notación

día/mes/año. Si hay fallo en la fecha se pide de nuevo. Se comprobará la
corrección de la fecha, y que tenga dos dígitos para el día, dos para el mes y dos
para el año. Se pedirá una segunda fecha y se validará también. Con esas dos
fechas:

a. Calcula la diferencia en días, minutos y segundos.

b. Calcula cuál es la fecha más y menos reciente.

c. Devuelve el día anterior a las dos fechas

d. Devuelve el día posterior a las dos fechas

Devolverá los resultados en una tabla que se abrirá en una nueva ventana.
*/


var sigue1 = false;
var sigue2 = false;

var fecha1 = '';
var fecha2 = '';

var regex = new RegExp('[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{2}')
//mientras la fecha 1 no sea valida se repite
while (!sigue1) {
    fecha1 = prompt('introduce la primera fecha con formato DD/MM/AA');
    if (regex.test(fecha1) && fecha1.substring(0, 2) <= 31 && fecha1.substring(2, 2) <= 12) {
        sigue1 = true;
    }
}

//mientras la fecha 2 no sea valida se repite
while (!sigue2) {
    fecha2 = prompt('introduce la segunda fecha con formato DD/MM/AA');
    if (regex.test(fecha2) && fecha2.substring(0, 2) <= 31 && fecha2.substring(2, 2) <= 12) {
        sigue2 = true;
    }
}
//creo los dos objeto fecha , hay que mover los meses,dias,años para que coja el formato bien
date1 = new Date(fecha1.substring(6, 8), fecha1.substring(3, 5), fecha1.substring(0, 2));
date2 = new Date(fecha2.substring(6, 8), fecha2.substring(3, 5), fecha2.substring(0, 2));

ventana = window.open('', 'ventana', 'width=' + 600 + ', height=' + 600 + ', top=' + 0 + ', left=' + (screen.availWidth / 2));

//no funciona la tabla, al ponerlo en la ventana emergente se queda fuera de la tabla
ventana.document.write(`<table>
<td>
    <tr>
        Diferencia en dias, Minutos y segundos\n
    </tr>
    <tr>
        cuál es la fecha más y menos reciente.\n
    </tr>
    <tr>
        Devuelve el día anterior\n
    </tr>
    <tr>
        Devuelve el día posterior\n
    </tr>
</td>
<td>
    <tr>
        ${diferencia(date1, date2)}
    </tr>
    <tr>
        ${reciente(date1, date2)}
    </tr>
    <tr>
    ${diaAnterior(date1, date2)}

    </tr>
    <tr>
    ${diaPosterior(date1, date2)}

    </tr>
</td>
</table>`);


function diferencia(primera, segunda) {
    let diferencia = 0;
    //miro cual es la mayor para restarlas
    if (primera >= segunda) {
        diferencia = primera - segunda;
    } else {
        diferencia = segunda - primera;
    }
    //muestro la diferencia en dias y voy calculando el resto
    let dias = diferencia / 86400000;
    let resto = diferencia % 86400000;
    let horas = resto / 3600000;
    resto = resto % 3600000;
    let minutos = resto / 60000;
    resto = resto % 60000;
    let segundos = resto / 1000;

    return (Math.floor(dias) + " dias de diferencia\n" + Math.floor(horas)
        + " horas de diferencia\n" + Math.floor(minutos) + " minutos de diferencia\n" + Math.floor(segundos) + " segundos de diferencia\n");

}

function reciente(primera, segunda) {
    let texto = '';
    //miro cual es la que mas ms tiene, esa es la mas reciente
    if (primera >= segunda) {
        texto += `La fecha mas reciente es la primera que es la fecha del ${primera.toLocaleDateString()}\n`;
    } else {
        texto += `La fecha mas reciente es la segunda que es la fecha del ${segunda.toLocaleDateString()}\n`;
    }

    return texto;
}

function diaAnterior(primera, segunda) {
    let texto = '';
    //resto los ms de un dia a las 2 fechas , en la siguiente funcion lo hago con metodos propios del objeto tambien
    let msPrimera = primera - 86400000;
    let msSegunda = segunda - 86400000;

    let anterior1 = new Date(msPrimera);
    let anterior2 = new Date(msSegunda);

    texto = `El dia anterior de la primera fecha fue el ${anterior1.toDateString()} \n 
    El dia anterior de la segunda fecha fue el ${anterior2.toDateString()} \n`
    return texto;
}
function diaPosterior(primera, segunda) {
    let texto = '';
    let posterior1 = primera;
    let posterior2 = segunda;

    //sumo 1 dia a las fechas con metodos propios del objeto
    posterior1.setDate(primera.getDate()+1)
    posterior2.setDate(segunda.getDate()+1)

    //muestro el texto
    texto = `El dia posterior de la primera fecha fue el ${posterior1.toDateString()} \n 
    El dia posterior de la segunda fecha fue el ${posterior2.toDateString()} \n`
    return texto;
}

