function crearTabla(filas = 10,columnas = 4,color = 'black'){

    document.write(`<table style=" border:3px solid ${color};">`);
        for(var i = 0; i < filas; i++){
            document.write(`<tr>`);
                for(var j = 0; j < columnas;j++){
                    document.write(`<td style=" border:1px solid ${color};">celda</td>`);
                }
            document.write(`</tr>`);
        }
    document.write(`</table>`);
}


crearTabla();
crearTabla(20,10);


for(var i = 0; i <10;i++){
    crearTabla(5,4,'green');

}

/*
Crea una función en JavaScript que nos permita dibujar una tabla en una página web.

Como parámetros indicaremos el número de filas y de columnas con dos números. 

Por defecto tomará 10 filas y 4 columnas.

La tabla se crea con un borde negro de 1 píxel entre cada celda, pero un tercer
parámetro permite indicar el color (por defecto será negro). 

El borde exterior medirá 3 píxeles y siempre será del mismo color del borde de las celdas.

Usa la función para crear una tabla con borde negro de 10 filas y 4 columnas. 

Úsala de nuevo para generar una tabla de 20 filas y 10 columnas, con borde negro. 

Finalmente consigue dibujar 10 tablas de 5 filas y 4 columnas que tengan borde verde.
 */