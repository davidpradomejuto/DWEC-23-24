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

var cadenas = prompt("Introduce una palabra, coon un '.' el programa ser termina");

addEventListener('load',inicio());

function inicio(){
    btnExtraerFrases.addEventListener('click',ExtraerFrases());
    btnExtraerPalabras.addEventListener('click',ExtraerPalabras());
    btnFraseLarga.addEventListener('click',FraseLarga());
    btnNumerar.addEventListener('click',Numerar());
    btnDeletrear.addEventListener('click',Deletrear());
}

function ExtraerFrases(){
    let arrFrases = cadenas.split(".");

    visualizarFrases.value = `hay ${arrFrases.length} frases `;

    for (let i = 0; i < arrFrases.length; i++) {
        visualizarFrases.value = visualizarFrases.value+` Frase numero ${i} es ${arrFrases[i]}`;
    }
}

function ExtraerPalabras(){
    let arrPalabras = cadenas.split(" ");

    visualizarPalabras.value = `hay ${arrPalabras.length} frases `;


    for (let i = 0; i < arrPalabras.length; i++) {
        visualizarPalabras.value = visualizarPalabras.value+`palabra numero ${i} es ${arrPalabras[i]}`;
    }
}

function FraseLarga(){

}

function Numerar(){

}

function Deletrear(){

}