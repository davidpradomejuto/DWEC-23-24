// Diseña una página educativa para niños
// a. Se trata de que haya varios temas y de cada tema 3 frases para completar que se eligen al azar
// b. Se elige tema
// c. Después al elegir el tema aparece una frase con huecos en donde hay que colocar las palabras que faltan
// d. Estas palabras aparecen debajo de la frase en una lista, que tendrá varias palabras, unas que serán las que faltan y otras no.
// e. Cuando se hace clic en ellas se van colocando en los huecos hasta completar la frase. En ese mismo orden
// f. Tendremos una opción corregir una vez que terminemos
// g. Las palabras que estén mal colocadas se pondrán en rojo, las que están bien, en verde.
// h. También dará opción de segunda oportunidad, de forma que si hay rojas se  quitan y se vuelven a colocar debajo para probar otra vez, las verdes se
// quedan en la frase.

// i. Básicamente hará esto, se pueden añadir mejoras. Se realizará con las
// interfaces del DOM, estilos en línea y cambio de atributos.


addEventListener('load', inicio)
var frase;
var tema;

function inicio() {
    tema = document.querySelector('#tema');
    frase = document.querySelector('#frase');
    var btnElegirTema = document.querySelector('#btnElegirTema');

    var frases = new Map([
        ['videojuegos', ["los videojuegos se '<span id='frase1'><span>' en un '<span id='frase2'><span>' o en una '<span id='frase3'><span>'", "Pokemon es un <span id='frase1'><span> de la compañia <span id='frase2'><span> que es una comapañia de <span id='frase3'><span>", "antes los juegos venian en <span id='frase1'><span> ahora se encuentran <span id='frase2'><span> y las copias fisicas son para <span id='frase3'><span>"]],
        ['coches', ["", "", ""]],
        ['aviones', ["", "", ""]]
    ]);


    var palabras = new Map([
        ['videojuegos', ["juegan", "ordenador", "consola", "videojuego", "Nintendo", "Japonesa", "DVD", "digital", "Colecionista"]],
        ['coches', ["", "", ""]],
        ['aviones', ["", "", ""]]
    ]);

    var palabras = new Map([
        ['videojuegos', ["juegan", "ordenador", "consola", "videojuego", "Nintendo", "Japonesa", "DVD", "digital", "Colecionista"]],
        ['coches', ["", "", ""]],
        ['aviones', ["", "", ""]]
    ]);


    btnElegirTema.addEventListener('click', () => {

        switch (tema.value) {
            case 'videojuegos':
                let contador = 1;
                frase.innerHTML = frases.get("videojuegos")[0];

                let selectFrase = document.createElement('select');
                selectFrase.id = "selectPalabra";

                for (let i = 0; i < 3; i++) {
                    let option = document.createElement('option');
                    option.value = palabras.get("videojuegos")[i];
                    option.textContent = palabras.get("videojuegos")[i];
                    selectFrase.appendChild(option);
                }

                document.querySelector('#controles').appendChild(selectFrase);

                document.querySelector('#btnEnviarPalabra').addEventListener('click', () => {
                    enviarPalabra(document.querySelector('#selectPalabra').value, contador);
                    contador++;
                });
                document.querySelector('#btnComprobar').addEventListener('click', () => {
                    comprobar(fraseParaComprobar, palabrasValidas)

                });

                break;

            case 'coches':
                break;

            case 'aviones':
                break;
        }


        function enviarPalabra(palabra, posicion) {
            frase = document.querySelector('#frase');
            frase.querySelector( `#frase${posicion}`).innerHTML = palabra+frase.querySelector( `#frase${posicion}`).innerHTML;
        }

        function comprobar(fraseParaComprobar, palabrasValidas) {
        }
    });


}

