addEventListener('load', inicio, false);

function inicio() {
    btnCalcular.addEventListener("click", calcular, false);
    btnCargarEjemplo.addEventListener("click", cargarEjemplo, false);
    btnReiniciar.addEventListener("click", limpiar, false);

}

function limpiar(){
    numeros.value="";
    numeros.focus();
}

function cargarEjemplo() {
    numeros.value = "3,5,7,3,2";
}

function calcular() {
   var vector =  numeros.value.split(",");
   let suma = 0;
   for (let i = 0; i < vector.length; i++) {
       suma += parseInt(vector[i]);
   }
   let media = suma / vector.length;
 
   let mayor = Math.max(...vector);
   let menor = Math.min(...vector);

   const resultado =  document.getElementById("resultado");
   resultado.innerHTML = `La suma es ${suma}<br> La media es ${media}<br>El mayor es ${mayor}<br>El menor es ${menor}<br>El array es es [${vector}]<br>`;
}