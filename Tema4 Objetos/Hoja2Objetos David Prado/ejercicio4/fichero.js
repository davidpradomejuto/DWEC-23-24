/* 
Construye un objeto partiendo de Object y modifícalo para modelar una matriz.

Sus propiedades serán nFilas, nColumnas y contenido.

Y sus métodos , inicializarMatriz(valor), que rellena toda la matriz con el mismo valor,
aleatoriaMatriz(), que rellena la matriz con enteros aleatorios entre 1 y 100, y
verMatriz() que la muestra por consola.
*/

class matriz {
    constructor(nFIlas = 1, nColumnas = 1) {
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