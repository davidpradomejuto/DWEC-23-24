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



function inicio() {

    var frases = new Map([
        ['videojuegos', "los videojuegos se ¿<p id='frase1'><p>? en un ?<p id='frase2'><p>? o en una ?<p id='frase3'><p>?"],
        ['coches', "Los coches tienen 4 ¿<p id='frase1'><p>?  y necesitas un ?<p id='frase2'><p>? para conducirlos ?<p id='frase3'><p>?"],
        ['aviones', "los aviones para volar tienen ¿<p id='frase1'><p>?  y se estacionan en ?<p id='frase2'><p>? y son llevados por ?<p id='frase3'><p>?"]
    ]);


    var palabrasCorrectas = new Map([
        ['videojuegos', ["juegan", "ordenador", "consola"]],
        ['coches', ["ruedas", "carnet", "legalmente"]],
        ['aviones', ["alas", "aeropuertos", "pilotos"]]
    ]);
    var palabras = new Map([
        ['videojuegos', ["juegan", "consola", "ordenador"]],
        ['coches', ["carnet", "legalmente", "ruedas"]],
        ['aviones', ["aeropuertos", "alas", "pilotos"]]
    ]);



    btnElegirTema.addEventListener('click', () => {

        btnElegirTema.disabled = true;

        document.querySelector('#btnReintentar').disabled = false;
        document.querySelector('#btnComprobar').disabled = false;

        //este es el contador para ir metiendo las palabras en los span
        var contador = 1;

        ponerFrase();

        document.querySelector('#btnEnviarPalabra').addEventListener('click', () => {
            var select = document.querySelector('#selectPalabra');
            enviarPalabra(select.value, contador);
            if (select && select.selectedIndex >= 0) {
                select.removeChild(select[select.selectedIndex]);
            }
            contador++;
        });

        document.querySelector('#btnComprobar').addEventListener('click', () => {
            //le paso la frase
            comprobar();
        });

        document.querySelector('#btnReintentar').addEventListener('click', () => {
            reintentar();
        });



        function enviarPalabra(palabra, posicion) {
            frase.querySelector(`#frase${posicion}`).innerHTML = palabra + frase.querySelector(`#frase${posicion}`).innerHTML;
        }

        function reintentar() {
            document.querySelector('#selectPalabra').remove();
            ponerFrase();
            contador = 1;
        }

        function comprobar() {

            //variable para comprobar si es todo correcto
            let correcto = true;
            if (frase1.textContent === palabrasCorrectas.get(tema.value)[0]) {
                frase1.style.color = 'green';
            } else {
                frase1.style.color = 'red';
                correcto=false;
            }

            if (frase2.textContent === palabrasCorrectas.get(tema.value)[1]) {
                frase2.style.color = 'green';
            } else {
                frase2.style.color = 'red';
                correcto=false;
            }

            if (frase3.textContent === palabrasCorrectas.get(tema.value)[2]) {
                frase3.style.color = 'green';
            } else {
                frase3.style.color = 'red';
                correcto=false;
            }

            if(correcto){
                alert('Enhorabuena la frase es correcta');
            }else{
                alert('VAYA!!!! HAS FALLADO')
            }
        }

        function ponerFrase() {
            //esta es la frase que se va poner en el HTML
            frase.innerHTML = frases.get(tema.value);

            //Genero el select de las palabras valids
            var selectFrase = document.createElement('select');
            selectFrase.id = "selectPalabra";

            for (let i = 0; i < 3; i++) {
                var option = document.createElement('option');
                option.value = palabras.get(tema.value)[i];
                option.textContent = palabras.get(tema.value)[i];
                selectFrase.appendChild(option);

            }

            //añado el select de las palabras antes del boton de enviar la palabra
            document.querySelector('#controles').insertBefore(selectFrase, document.querySelector('#btnEnviarPalabra'));

        }


    });


}

