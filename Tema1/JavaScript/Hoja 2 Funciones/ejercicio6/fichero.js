var multiploDe10 = (numero) => {
  let result=false;

  if(numero % 10 == 0) result = true;

  return result;
}

console.log(multiploDe10(5));

console.log(multiploDe10(20));

/* 
Escribe una función que indique si un número que recibe como parámetro es múltiplo
de 10.
*/