/* 
(3 puntos) Utilizando el código HTML que se muestra a continuación:
<h1>Texto de Prueba</h1>
<p>Probamos en este <strong>texto</strong>, de manera que este es el primer párrafo.</p>
<p id="segundoparrafo">Ahora estamos en el segundo y colocamos un par de enlaces externos <a href="http://www.google.es">Buscador</a> asi como quien no quiere.
Y ahora el otro <a href="http://www.yahoo.es">Correo Yahoo</a>. Esto es el final</p>


a. Utiliza un botón “VISUAL”, que llame a la función “INFORMACIÓN” que
visualizará lo siguiente (siempre que haya información que mostrar, control
importante):
 El número de párrafos que hay
 El número de enlaces de cada párrafo
1. PÁRRAFO 1 X ENLACES
2. PÁRRAFO 2 X ENLACES
Y así sucesivamente
 El texto contenido en los enlaces
1. PÁRRAFO 1
a. ENLACE 1 TEXTO
b. ENLACE 2 TEXTO

b. Añade en la página un script para crear una select con 10 opciones
dinámicamente. Al pulsar el botón “CREAR” irá a la función “CREARSELECT” y
cargará las opciones con el texto, con 10 opciones: OPCIÓN 1 … OPCIÓN 10.
c. Cuando elegimos una opción, nos preguntará con confirm si estamos seguros
de su borrado, si confirmamos esa opción será eliminada.
*/

addEventListener('load', () => {

    btnVisual.addEventListener('click', informacion);
    btnCrear.addEventListener('click', crearSelect);

    function informacion() {
        //cogo todos los parrafos
        var parrafos = document.querySelectorAll('p');
        console.log("-------El número de párrafos que hay--------");
        //muestro la cantidad de parrafos
        console.log(`Numero de parrafos ${parrafos.length}`);

        console.log("-------número de enlaces de cada párrafo--------");

        let contador = 1;

        for (const parrafo of parrafos) {
             //voy iterando los parrafos y cogiendo todos los enlaces de cada parrafo
            let enlaces = parrafo.querySelectorAll('a');
            //si el parrafo tiene algun enlace muestro la cantidad
            //si no, muestro un mensaje de que no tiene parrafos
            if (enlaces.length > 0) {
                console.log(`Parrafo ${contador} tiene ${enlaces.length} enlaces`)
                contador++;
            } else {
                console.log(`Parrafo ${contador} no tiene enlaces`);
                contador++;
            }
        }
        console.log("-------El texto contenido en los enlaces--------");

        contador = 1;
        for (const parrafo of parrafos) {
            //voy iterando los parrafos y cogiendo todos los enlaces de cada parrafo
            let enlaces = parrafo.querySelectorAll('a');
            if (enlaces.length > 0) {
                console.log(`Parrafo ${contador} :`)
                //si el parrafo tiene enlaces los itero y voy mostrando su contenido
                let contador2 = 1;
                for (const enlace of enlaces) {
                    console.log(`Enlace ${contador2} : ${enlace.textContent}`);
                    contador2++;
                }

                contador++;
            } else {
                console.log(`Parrafo ${contador} no tiene enlaces`);
                contador++;

            }
        }

    }

    function crearSelect(){
        let select = document.createElement('select');
        select.id='select';

        for (let i = 0; i < 10; i++) {
            //genero la opcion con el value y el text content
            let opcion = document.createElement('option');
            opcion.value = "opcion "+i;
            opcion.textContent = "opcion "+i;
            // y añado la opcion al select
            select.appendChild(opcion);
        }

        //al final añado el select al div del html
        document.querySelector('div').appendChild(select);

        //le añado al select un addevent listener que pregunta si se quiere borrar esa opcion
        //y si se confirma,se borra
        select.addEventListener('change',() =>{
            let confirmacion = confirm('quieres borrar esta opcion?');
            if(confirmacion){
                //borro el indice seleccionado del select
                select.removeChild(select[select.selectedIndex]);
            }
        });
    }
});