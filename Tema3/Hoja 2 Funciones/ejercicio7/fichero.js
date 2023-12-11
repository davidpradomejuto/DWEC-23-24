var anioBisiesto = (anio) => {
 if(anio % 4 == 0 && anio % 100!=0 || anio % 100==0 && anio % 400==0) return true;
}

document.write(anioBisiesto(2020));
/* 
Programa una función que determine si un año que recibe como parámetro es
bisiesto.
*/