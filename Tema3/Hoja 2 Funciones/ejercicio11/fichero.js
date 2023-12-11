(function(){
  document.write(`Comenzando...`);

  var currentTime = new Date().getTime();

  setTimeout(function(){  document.write(`Finalizando...`);
}, 3000);

})();


/* 
Crea una función autoejecutable que muestre el mensaje “Comenzando…” y tres
segundos después escriba “Finalizado.”.
*/