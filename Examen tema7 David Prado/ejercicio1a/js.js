
// a. (1,5 puntos) Crea un formulario de registro web, con tres inputs de tipo
// texto. Se trata de poder introducir datos en ellos, pero cuando se pulse
// ENTER en uno de ellos, se pase al foco al siguiente y borro lo que
// haya.
//  Se realizará con una función llamada CAMBIAR
//  Cuando pulso ENTER en el último input, volverá al primero.
// b. (2 puntos) Crea otro formulario que contenga dos inputs de tipo TEXT:
//  El primero solo admitirá números (sólo se visualizarán los
// caracteres válidos) y UN punto decimal. Además, nos tiene
// que permitir borrar también. Cada vez que se escriba un
// carácter que no sea número, se informará al usuario de que ha
// escrito un carácter no válido.
//  El segundo utilizará una expresión regular para validar si una
// fecha se está escribiendo en el formato correcto. El formato
// que se reconocerá como válido será 12/03/2024. Cuando se
// termine de escribir la fecha se informará al usuario si el
// formato es correcto o no.


addEventListener('DOMContentLoaded',()=>{
    var inputs= document.querySelectorAll('input');
    var contador=0;
    //inicio el focus en el primero
    inputs[contador].focus();
    
    //genero el evento del atecla enter
    document.addEventListener('keypress',(evento)=>{
        //si la tecla presionada es enter ejecuto la funcion cambiar
        if(evento.key == "Enter"){
            cambiar();
        }
    })

    //funcion para cambiar entre inputs, cada vez que se llama cambia el foto al siguiente de la coleccion
    // subo en 1 el contador y le paso el focus al input que le tocaria
    function cambiar(){
        contador++;
        //valido que el proximo numero no pueda ser mayor al numero de inputs que tengo
        if(contador+1 >inputs.length){
            contador = 0;
        }

        //vacio el input siguiente
        inputs[contador].value = '';
        
        //cambio el focus al input que le tocaria, en este caso iria '0-1-2-0-1-2-0-1'....
        inputs[contador].focus();
    }
})