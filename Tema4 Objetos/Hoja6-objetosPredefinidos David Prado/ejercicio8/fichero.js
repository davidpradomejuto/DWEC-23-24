/* 
Visor fotográfico. Crea una aplicación que permita ver automáticamente las
imágenes de un bucle. Tendrá un botón de encendido y otro de 
OFF
*/


addEventListener('load', inicio, false);

var imagenes = ['africa.jpg', 'londres.jpg', 'paris.jpg', 'roma.jpg'];
var intervalo ;

function inicio() {
  btnOn.addEventListener('click', on, false);
  btnOff.addEventListener('click', off, false);
}

function on() {
  carrusel(true);
  //si el boton on se ha dado lo deshabilito y habilito el off
  btnOn.disabled = true;
  btnOff.disabled = false;
}

function off() {
  carrusel(false);
    //si el boton off se ha dado lo deshabilito y habilito el on
  btnOn.disabled = false;
  btnOff.disabled = true;
}

function carrusel(estado) {

  if (estado) {

    console.log("Iniciando el autoplay");

    let i = 0;
    //cada 2 segundos llamo a la funcion para mostrar la imagen con un indice del array nuevo , si el indice llega al final vuelve a 0
    intervalo = setInterval(function(){
      mostrarImagen(i);
      i++

      //miro si i es mayor al ultimo indice del array y si lo es vuelvo a 0
      if (i >= imagenes.length) {
        i = 0;
      }

   }, 1000);
    
  }else{
    console.log(clearInterval(intervalo));
    console.log("Parando el autoplay");
  }
}

//esta funcion recibe un numero,se va al array de imagenes y muestra la imagen que este en ese indice del array
function mostrarImagen(indice) {
  document.getElementById('imagen').innerHTML = `<img src='img/${imagenes[indice]}' class='imagen'>`
}



