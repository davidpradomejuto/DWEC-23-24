/* 
Realiza un script que nos pida confirmación para abrir una nueva ventana, si es
que sí, nos activa una barra de progreso y cuando se llene abrimos la ventana.
*/


addEventListener('load', inicio, false);


function inicio() {
    btnAbrir.addEventListener('click', abrir, false);
}

function abrir(){
    progreso();

    setTimeout(function(){
        window.open("","");
    }, 2000);
}

function progreso() {
    var barraLabel = document.getElementById("barraLabel"); // Define las variables aquí
    var barra = document.getElementById("barra"); // Define las variables aquí
  
    barraLabel.style.display = "block";
    barra.style.display = "block";
  
    var valorBarra = 0;
    var intervalo = setInterval(aumentarBarra, 19); // 250 milisegundos = 0.25 segundos
  
    // Función para aumentar la barra de progreso
    function aumentarBarra() {
      valorBarra += 1; // Aumentar en 25%
  
      // Actualizar el valor de la barra de progreso en la etiqueta
      barraLabel.innerHTML = "<h3>Procesando " + valorBarra + "% </h3>";
  
      // Actualizar el estilo de la barra de progreso
      barra.value = valorBarra; // Solo asigna el valor, no necesitas agregar "%"
  
      // Detener cuando llegue al 100%
      if (valorBarra >= 100) {
        clearInterval(intervalo);
      }
    }
  }