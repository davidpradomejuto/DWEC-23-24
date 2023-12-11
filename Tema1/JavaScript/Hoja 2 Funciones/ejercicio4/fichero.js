var devolverMasVocales = (frase1, frase2) => {

  cadena1 = frase1.split("");
  cadena2 = frase2.split("");

let vocales1 = 0;
let vocales2 = 0;

  for (let letra of cadena1) {
    if(letra.match('a|e|i|o|u')){
      vocales1++;
    }
  }

  for (let letra of cadena2) {
    if(letra.match('a|e|i|o|u')){
      vocales2++;
    }
  }

  let resultado = '';

    if (vocales1 > vocales2) {
    resultado = `La cadena 1 '${frase1}' contiene ${vocales1} vocales`;
  } else {
    resultado = `La cadena 2 '${frase2}' contiene ${vocales2} vocales`;
  }
  return resultado;
}

console.log(devolverMasVocales("hola me llamo david","adios"));
/* 
Escribe una función flecha que reciba dos cadenas de caracteres e informe por consola
de aquella que contiene más vocales.
*/