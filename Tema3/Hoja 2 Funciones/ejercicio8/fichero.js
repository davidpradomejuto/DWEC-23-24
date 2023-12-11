var TablaMultiplicar = (numero) => {
    document.write("<table border=1px>");
    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write(`<td> ${numero} x ${i} = ${numero * i}</td>`);
        document.write("</tr>");
    }
    document.write("</table>");

}

TablaMultiplicar(4)
/* 
Crea una función que muestre la tabla de multiplicar del número que recibe como
parámetro.
*/