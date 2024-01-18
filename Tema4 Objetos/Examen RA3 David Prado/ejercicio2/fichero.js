/*Crea una aplicación web con un formulario que permita recoger texto.
La aplicación entenderá que se ha escrito una frase cuando termina en un punto.
Crea:

a. Un botón para extraer las frases que existan y el número de frases que
hay y visualizarlas en una nueva ventana. Esta ventana permanecerá
abierta 10 segundos y automáticamente se cerrará.

b. Un botón para contar el número total de caracteres que hay en el texto y
visualizar dicho número en una nueva ventana. Esta ventana se abrirá
en el centro de la pantalla, permanecerá abierta 5 segundos y
automáticamente se cerrará.

c. Un botón para elegir por teclado una frase (número de frase) y extraer
sus palabras numeradas separadas por espacios. Se visualizará en una
nueva ventana que se cerrará a través de un botón insertado en la
ventana principal.

d. Un botón para convertir en mayúscula, por si no lo estuviesen ya, las
primeras letras de cada frase. El resultado se verá en una nueva ventana
que aparecerá en la esquina superior derecha. */
var sigue = true;

var cadenas = prompt("Introduce una cadena, cada frase termina con un '.'");

addEventListener('load', inicio, false);

function inicio() {
    btnExtraerFrases.addEventListener('click', ExtraerFrases, false);
    btnContarPalabras.addEventListener('click', Contar, false);
    btnNumerar.addEventListener('click', Numerar, false);
    btnMayus.addEventListener('click', Mayus, false);
}

function ExtraerFrases() {
    let frases = ''

    let arrFrases = cadenas.split(".");

    frases = `\nhay ${arrFrases.length} frases `;

    for (let i = 0; i < arrFrases.length; i++) {
        frases = frases + `\nFrase numero ${i+1} es '${arrFrases[i]}' `;
    }

    //abro la ventana
    ventana = window.open('', 'ventana', 'width=' + 400 + ', height=' + 400 + ', top=' + 0 + ', left=' + (screen.availWidth / 2));

    ventana.document.write(frases);

    //cierro la ventana depues de 10 segundos
    ventana.setTimeout(()=>{ventana.close()},10000);

}

function Contar() {
    let caracteres = ''

    //quito los espacios
    let arrPalabras = cadenas.split(' ');
    //junto las palabras en un string
    let cadenasCaracteres = arrPalabras.join('');
    //y la vuelvo a separar en caracteres independientes
    let arrCaracteres = cadenasCaracteres.split('');

    //muestro el N de caracteres que hay
    caracteres = `\nhay ${arrCaracteres.length} caracteres `;

    ventana = window.open('', 'ventana', 'width=' + 400 + ', height=' + 400 + ', top=' + 0 + ', left=' + (screen.availWidth / 2));

    ventana.document.write(caracteres);
    //a los 5 secs cierro la ventana
    ventana.setTimeout(()=>{ventana.close()},5000);


}

function Numerar() {
    //esta variable es por si intenta buscar un numero de frase que no existe
    let sigue = false;
    let texto = "<button  onclick='window.close();'>Cerrar esta ventana</button>\n";
    let numero = prompt('introduce el numero de frase que quieres sacar');

    let arrFrases = cadenas.split(".");

    //si el numero de frase que pide es menor o igual al numero de frases que existen del dejo seguir
    if (arrFrases.length > numero) {
        sigue = true;
    }

    ventana = window.open('', 'ventana', 'width=' + 400 + ', height=' + 400 + ', top=' + 0 + ', left=' + (screen.availWidth / 2));

    if (sigue) {
        
        //el orden empieza el 0, he intentado ponerlo para que sea 1, pero se ralla
        var arrPalabras = arrFrases[numero].split(" ");

        for (let i = 0; i < arrPalabras.length; i++) {
            texto = texto + `\n Palabra numero ${i} es '${arrPalabras[i]}' `;
        }
    } else {
        //si ha introducido un numero de frase que no existe, se lo digo
        texto = texto + " el numero que has introducido no corresponde con ninguna frase del texto....";
    }


    ventana.document.write(texto);
}


function Mayus() {
    //separo las frases
    var arrFrases = cadenas.split(".");

    //voy conviertiendo el primer caracter de la frase en mayuscula
    for (var i = 0; i < arrFrases.length; i++) {
        arrFrases[i] = arrFrases[i].charAt(0).toUpperCase() + arrFrases[i].slice(1);
    }
    //despues las junto con un punto entre cada frase
    var cadenaCapitalizada = arrFrases.join(".");

    //abro la ventana
    ventana = window.open('', 'ventana', 'width=' + 400 + ', height=' + 400 + ', top=' + 0 + ', left=' + screen.availWidth);
    ventana.document.write(cadenaCapitalizada);

}