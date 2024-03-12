
// 2. (3,25 puntos) Escribe un programa para simular la velocidad de pulsación de
// dos teclas. En pantalla aparecerán dos cajas, una verde y otra roja, una debajo
// de otra. El alto de cada caja será de 40 px y el ancho inicial de 10 px cada una.
// La primera caja incrementará su ancho 5 px cada vez que se pulse la tecla [a].
// La segunda hará lo mismo cuando se pulse la tecla [ñ]. El juego termina
// cuando una de las cajas llega a 500px de ancho. En ese momento deben
// desactivarse los eventos de ambas teclas y mostrarse un mensaje bajo las
// cajas que ponga “GANA VERDE” o “GANA ROJO”. Se trata de calcular con
// qué mano eres capaz de realizar más pulsaciones.

addEventListener('DOMContentLoaded', () => {
    var juegoTerminado=false;
    var panel = document.querySelector('#panel');
    var puntuacion = document.querySelector('#puntuacion');
    var puntos = 0;
    puntuacion.textContent=puntos;

//saco todas las imagenes
    let imagenes = document.querySelectorAll('img');

    //calculo el numero de parejas 
    var parejas = imagenes.length/2;
    var parejasEncontradas=0;

    //variables que guardan que carta se ha girado
    var PrimerSeleccionada=false;
    var SegundaSeleccionada=false;

    var imagen1='';
    var imagen2='';

    imagenes.forEach(element => {
        //por cada imagen del tablero creo un evento click que cuando se clicke se de la vuelta y se compruebe si se ha finalizado el juego
        element.addEventListener('click',() =>{
            voltear(element);

            ComprobarFinalizacionDeJuego();
        });
    });



    //funcion para voltear una imagen
    function voltear(imagen) {
        //mientras el el juego no haya terminado hago estas acciones
        if(!juegoTerminado){

            //compruebo si estoy volteando la primera o la segunda carta 
            if(!PrimerSeleccionada && !SegundaSeleccionada){
                console.log('Primera volteada');
    
                //cambio el estado de la primera carta a true
                PrimerSeleccionada=true;
                //hago un intercambio entre el src de la imagen y su dataset
                let aux = imagen.src;
                imagen.src=imagen.dataset.url;
                imagen.dataset.url= aux;
    
                //relleno la primera variable imagen con la imagen que acabo de girar
                imagen1=imagen;
            }else if(PrimerSeleccionada && !SegundaSeleccionada){
                console.log('Segunda volteada');
    
                //cambio el estado de la se
                SegundaSeleccionada=true;
                //hago un intercambio entre el src de la imagen y su dataset
                let aux = imagen.src;
                imagen.src=imagen.dataset.url;
                imagen.dataset.url= aux;
    
                //relleno la segunda variable imagen con la imagen que acabo de girar
                imagen2=imagen;
                comprobar();
            }
        }
    }

    //funcion para comprobar que barra es mas grande y dar un alert
    function comprobar() {
        //miro si las imagenes son iguales, si lo son digo que es correcto
        if(imagen1.src == imagen2.src){
            //en el panel sigo que ha sido correcto
            panel.textContent='Correcto, Pareja encontrada';
            //sumo la puntuacion
            puntos+=5;
            //y pongo los puntos en el span
            puntuacion.textContent=puntos;

            //sumo 1 a las parejas encontradas
            parejasEncontradas++;
            // y reseteo el estado de las selecciones
            PrimerSeleccionada=false;
            SegundaSeleccionada=false;
            console.log('pareja encontrada');

        }else{
            //en el panel pongo que ha sido encontrada
            panel.textContent='Error pareja no encontrada';
            //si falla espero 1 segundo y doy la vuelta a las imagenes
            setTimeout(()=>{
                PrimerSeleccionada=false;
                SegundaSeleccionada=false;
    
                let aux = imagen1.dataset.url;
                imagen1.dataset.url=imagen1.src;
                imagen1.src= aux;

                aux = imagen2.dataset.url;
                imagen2.dataset.url=imagen2.src;
                imagen2.src= aux; 
            },1000)
               
        }
    }
     //funcion para comprobar que ha terminado el juego
    function ComprobarFinalizacionDeJuego() {
         //miro si el numero de parejas encontradas es igual al numero de parejas en la mesa
        if(parejas == parejasEncontradas){
            //soy un alert y muestro un pararafo
            alert('Felicidades has ganado el juego');
            panel.textContent='Felicidades has ganado el juego';

            //termino el juego
            juegoTerminado=true;
        }
    }

})