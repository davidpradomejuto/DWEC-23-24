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
const llegadas = { "roma": "roma.jpg", "paris": "paris.jpg", "londres": "londres.jpg" };

var viajes = { 'oviedo': { 'roma': 0, 'paris': 0, 'londres': 0 }, "santander": { 'roma': 0, 'paris': 0, 'londres': 0 }, "madrid": { 'roma': 0, 'paris': 0, 'londres': 0 }, "bilbao": { 'roma': 0, 'paris': 0, 'londres': 0 } };

function inicio() {
    var popup = null;
    verViaje.addEventListener('click', ver, false);

    function ver() {
        viajes[salida.value][llegada.value]++;
        setTimeout(() => {
            popup = popupwindow('popup.html', 300, 300);

            popup.document.write(`<h1>Mostrando datos del viaje</h1>

            <p>Viaje en ${document.querySelector('input[name="transporte"]:checked').value}desde <strong>${salida.value}</strong> hasta <strong>${llegada.value}</strong></p>

            <img src="img/${llegada.value}.jpg" width='200px' heigth='200px' alt="viaje" /> 

            <button><a href="javascript:window.open('','_self').close();">close</a></button>
            
            <table>
            <tr><td>SALIDAS</td><td>ROMA</td><td>PARIS</td><td>LONDRES</td></tr>
            <tr><td>${viajes['oviedo']}</td><td>${viajes['oviedo']['roma']}</td><td>${viajes['oviedo']['roma']}</td><td>${viajes['oviedo']['roma']}</td></tr>
            </table>
            `);

            for (var i = 0; i < viajes.length; i++) {
                for (var j = 0; j < viajes[i].length; j++) {
                   for (var key in viajes[i][j]) {
                     if (viajes[i][j].hasOwnProperty(key)) {
                       console.log(key + ': ' + viajes[i][j][key]);
                     }
                   }
                }
               }

        }, "1000");
    }

    function popupwindow(url, w, h) {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        return window.open(url, '_blank', 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }
}

