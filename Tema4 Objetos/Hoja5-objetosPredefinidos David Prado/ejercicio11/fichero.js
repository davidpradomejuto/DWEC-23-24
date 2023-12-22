/* 
Se trata de elegir el lugar de salida, el destino y el medio de transporte. Una
vez realizado esto pulsamos el botón ver viaje y al cabo de 2 segundos,
 nos muestra una progressbar simulando que está cargando y 
 nos abrirá una ventana centrada en la ventana (utilizando las propiedades de anchura y altura) en la pantalla de 300 por 300
con la información del viaje y con la imagen del destino, tendrá también la ventana el
botón para cerrarla. La ventana se llamará Popup.

Utilizamos la colección images de document para trabajar con ellas. Con todas las
elecciones válidas creamos una matriz de dos dimensiones que irá registrando y
acumulando las salidas y las llegadas:
*/

addEventListener('load', inicio, false);

var viajes = {
  'oviedo': { 'roma': 0, 'paris': 0, 'londres': 0 },
  'santander': { 'roma': 0, 'paris': 0, 'londres': 0 },
  'madrid': { 'roma': 0, 'paris': 0, 'londres': 0 },
  'bilbao': { 'roma': 0, 'paris': 0, 'londres': 0 }
};

function inicio() {
  var popup = null;
  verViaje.addEventListener('click', ver, false);

  function ver() {
    //hago que la funcion se ejecute 1 segundo despues de darle al boton
    setTimeout(() => {
      viajes[salida.value][llegada.value]++;
      popup = popupwindow('', 300, 300);

      //maqueto el popup con la imagen y todos los datos
      popup.document.write(`<link rel="stylesheet" href="css.css">
      
      <h1>Mostrando datos del viaje</h1>

        <p>Viaje en ${document.querySelector('input[name="transporte"]:checked').value} desde
        <strong>${salida.value}</strong> hasta <strong>${llegada.value}</strong></p>

        <img src="img/${llegada.value}.jpg" width='200px' height='200px' alt="viaje" />

        <button>
          <a href="javascript:window.open('','_self').close();">Cerrar</a>
        </button>`);

      // muestro la tabla iterando el objeto de los viajes
      popup.document.write('<table><tr><td>Salidas</td><td>Roma</td><td>París</td><td>Londres</td></tr>');
      for (var ciudad in viajes) {
        popup.document.write(`<tr><td>${ciudad}</td><td>${viajes[ciudad]['roma']}</td><td>${viajes[ciudad]['paris']}</td><td>${viajes[ciudad]['londres']}</td></tr>`);
      }
      popup.document.write('</table>');

    }, 1000);
  }

  //funcion para sacar el sitio donde sacar el popup
  function popupwindow(url, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, 'Popup', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  }
}


