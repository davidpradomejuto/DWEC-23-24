function modificarDiagonal(vector) {
  for (i = 0; i < vector.length; i++) {
      for (j = 0; j < vector[i].length;j++){
        if(i != j){
          vector[i][j]=0;
        }
        document.write(`${vector[i][j]}`);
      }
      document.write("<br>");
  }
}


const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

 modificarDiagonal(matriz);
/* 
Escribe una función que reciba como parámetro un array de 3x3 y lo devuelva
modificado con todos sus elementos a 0 excepto su diagonal principal.
*/