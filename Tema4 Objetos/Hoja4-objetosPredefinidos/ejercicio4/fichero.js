
function convertirTiempo() {
  //recogo todos los valores
  const valor = parseFloat(document.getElementById('valor').value);
  const unidad = document.getElementById('unidad').value;
  const metodo = document.getElementById('metodo').value;

  let resultado;

  //calculo el resultado
  switch (metodo) {
    case 'ms-to-sec':
      resultado = valor / 1000;
      break;
    case 'sec-to-ms':
      resultado = valor * 1000;
      break;
    case 'sec-to-min':
      resultado = valor / 60;
      break;
    case 'min-to-sec':
      resultado = valor * 60;
      break;
    case 'min-to-hr':
      resultado = valor / 60;
      break;
    case 'hr-to-min':
      resultado = valor * 60;
      break;
    case 'hr-to-day':
      resultado = valor / 24;
      break;
    case 'day-to-hr':
      resultado = valor * 24;
      break;
    default:
      resultado = 'Método no válido.';
      break;
  }

  visualizarResultado.value = `${valor} ${unidad} es igual a ${resultado} ${obtenerUnidadDestino(metodo)}`;
}

//para cambiar del metodoa las unidades cambiadas
function obtenerUnidadDestino(metodo) {
  const unidades = {
    'ms-to-sec': 'segundos',
    'sec-to-ms': 'milisegundos',
    'sec-to-min': 'minutos',
    'min-to-sec': 'segundos',
    'min-to-hr': 'horas',
    'hr-to-min': 'minutos',
    'hr-to-day': 'días',
    'day-to-hr': 'horas',
  };

  return unidades[metodo];
}
