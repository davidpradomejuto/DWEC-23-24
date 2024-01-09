/* 
Abrir una pantalla de tamaño pequeño que se “vaya cayendo” por la pantalla.
Dentro de ella estará escrito “me caigo”. Cuando llegue a la parte de debajo de
la pantalla, se cerrará y en la ventana principal aparecerá escrito “llego”.
*/


addEventListener('load', inicio, false);
var intervalo;
var popup;

function inicio() {
  btnOn.addEventListener('click', abrirVentana, false);
}


function abrirVentana() {
  //creo el pop up ocn tamaño 100x100
  popup = window.open('', 'Popup', 'width=' +100 + ', height=' + 100 + ', top=' + 0 + ', left=' + (screen.availWidth / 2));

  console.log(`max top = ${screen.availHeight}`);

  //escribo el "me caigo"
  popup.document.write(`me caigo`);

  //cada 20 ms le bajo 1 px
  intervalo = setInterval(function(){
    //muevo el popup 1 px hacia abajo
    popup.moveBy(0, 1);
    
    console.log(`TOP ${popup.screenTop} `);

    //si el popup a llegado abajo es decir su top es 100px por encima del dispnible , paro el intervalo y cierro el popup
    if(popup.screenTop+100 >= screen.availHeight ){
      clearInterval(intervalo);
      document.write(`llegue`);
      popup.close();
    }

 }, 10);

}


