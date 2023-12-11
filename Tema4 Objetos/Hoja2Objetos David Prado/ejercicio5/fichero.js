/* 
Escribe un programa que haga uso de la clase Club, para modelar un club de
fútbol que contenga las propiedades añoFundacion, numSocios,
nombreEstadio, ciudad y palmarés (de cada título debe almacenar su nombre y
año de consecuión). 

Elige los tipos de datos que consideres más útiles en cada
caso. Debe contener un único método, verClub(), que muestre toda la
información contenida en sus propiedades.

Crea seis objetos, de manera que el primero ejecute el constructor sin parámetros,
el segundo con un parámetro, el tercero con dos parámetros, y así sucesivamente
hasta el sexto con cinco parámetros. 

Realiza un recorrido de cada objeto asegurándote de que en cada recorrido modificas
 el contenido de alguna propiedad.
*/

class matriz {


    constructor(nFIlas = 1, nColumnas = 1, contenido) {
        this.nFIlas = nFIlas;
        this.nColumnas = nColumnas;
        this.contenido = new Array(nFIlas);
        
        for (var i = 0; i < this.contenido.length; i++) {
            this.contenido[i] = new Array(nColumnas);
        }

    }

    inicializarMatriz(valor) {
        for (let fila of this.contenido) {
            for (var i = 0; i < fila.length; i++) {
                fila[i] = valor;
            }
        }
        console.log(this.contenido);
    }
    aleatoriaMatriz() {
        for (let fila of this.contenido) {

            for (var i = 0; i < fila.length; i++) {
                fila[i] = Math.floor((Math.random() * 100) + 1);
            }
        }
        console.log(this.contenido);
    }

    verMatriz() {
        for (let fila of this.contenido) {
            for (let columna of fila) {
                document.write(`[${columna}]`);
            }
            document.write(`<br>`);
        }
    }
}

matriz = new matriz(3, 3);

matriz.inicializarMatriz(1);
matriz.verMatriz();
document.write("<br>")
matriz.aleatoriaMatriz();
matriz.verMatriz();