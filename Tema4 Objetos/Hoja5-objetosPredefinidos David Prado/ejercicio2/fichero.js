/* 
Crea un fragmento de HTML con las etiquetas que desees, pero que contenga
dos enlaces.

A continuación, crea un temporizador que elimine el primer enlace tras haber transcurrido cinco segundos. 

Tras la eliminación del primer enlace debes crear otro temporizador que se activará a los diez segundos y que
eliminará el segundo enlace.
*/
setTimeout(5000);

let a=document.getElementById("primerEnlace");
a.remove();
setTimeout(5000);


a=document.getElementById("segundoEnlace");
a.remove();
