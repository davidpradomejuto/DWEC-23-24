
var invertida = function(frase){
  return frase.split("").reverse().join("");
};

console.log(invertida('hola'));
/* 
Crea una función anónima vinculada a una variable llamada invertida que reciba una
cadena de texto y la devuelva invertida (transformada de derecha a izquierda).

Por ejemplo, si la cadena recibida es “hola” debe devolver “aloh”.
*/