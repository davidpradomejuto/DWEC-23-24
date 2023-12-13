/* 
Introducir un texto por teclado. El programa entenderá que una cadena de
caracteres es una frase cuando termina con un punto. Crear:

a. Botón para extraer las frases que existan y el número de frases que hay
y visualizarlas en un textarea. Cada frase con su número.

b. Botón para extraer las palabras y la cantidad que hay en cada frase y
visualizarlo. Cada palabra numerada.

c. Botón que obtenga como resultado qué frase es la más larga y
visualizar la frase más larga

d. Botón para elegir por teclado una frase (número de frase) y extraemos
sus palabras numeradas y las visualizamos separadas por un guion.

e. Botón para elegir una palabra y deletrearla. Visualizar en un textarea el
deletreo y también a la inversa.
*/

var sigue = true;

var cadenas = prompt("Introduce una cadena, cada frase termina con un '.'");

addEventListener('load', inicio, false);

function inicio() {

    btnExtraerPalabras.addEventListener('click', ExtraerPalabras, false);
    btnExtraerFrases.addEventListener('click', ExtraerFrases, false);
    btnFraseLarga.addEventListener('click', FraseLarga, false);
    btnNumerar.addEventListener('click', Numerar, false);
    btnDeletrear.addEventListener('click', Deletrear, false);
}

function ExtraerFrases() {
    visualizarFrases.value='';

    let arrFrases = cadenas.split(".");

    visualizarFrases.value = `\nhay ${arrFrases.length} frases `;

    for (let i = 0; i < arrFrases.length; i++) {
        visualizarFrases.value = visualizarFrases.value + `\nFrase numero ${i} es '${arrFrases[i]}' `;
    }
}

function ExtraerPalabras() {
    visualizarPalabras.value='';

    let arrPalabras = cadenas.split(' ');

    visualizarPalabras.value = `\nhay ${arrPalabras.length} palabras `;


    for (let i = 0; i < arrPalabras.length; i++) {
        visualizarPalabras.value = visualizarPalabras.value + `\nPalabra numero ${i} es '${arrPalabras[i]}' `;
    }
}

function FraseLarga() {
    visualizarLarga.value='';

    let arrFrases = cadenas.split(".");
    let frase = 0;
    let contadorPalabras = 0;


    for (let i = 0; i < arrFrases.length; i++) {
        if (arrFrases[i].length >= contadorPalabras) {
            contadorPalabras = arrFrases[i].length;
            frase = i;
        }
    }
    visualizarLarga.value = `\nLa Frase mas larga es '${arrFrases[frase]}' `;
}

function Numerar() {
    visualizarNumerar.value='';

    let arrFrases = cadenas.split(".");

    let arrPalabras = arrFrases[nfrase.value].split(' ');

    for (let i = 0; i < arrPalabras.length; i++) {
        visualizarNumerar.value = visualizarNumerar.value + `\nla palabra ${i} es '${arrPalabras[i]}' `;
    }

    // let stringPalabras = arrPalabras.join('-');
    visualizarNumerar.value = visualizarNumerar.value + `\nEl conjunto de palabras es '${arrPalabras.join('-')}'`;

}

function Deletrear() {
    visualizarDeletreo.value='';


    let arrPalabras = cadenas.split(' ');

    let palabra = arrPalabras[npalabra.value];

    let arrLetras = palabra.split('');


    for (let i = 0; i < arrLetras.length; i++) {
        visualizarDeletreo.value = visualizarDeletreo.value + ` '${arrLetras[i]}' `;
    }
}