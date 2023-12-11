function esPrimo(n) {
  for(let i=2;i<n;i++) {
      if(n%i==0)
          return false;
  }
  return true;
}

for(let i=1;i<=1000;i++) {
  if(esPrimo(i)) {
      document.write(i+"<br>");
  }
 }

/* 
Crea una función que permita saber si un número es primo o no. Aprovecha la función
creada para crear una página web que escriba los números primos del 1 al 1000.
*/