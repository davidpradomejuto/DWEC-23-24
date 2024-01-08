/* 
Crea un script con un botón PARAR. Al pulsarlo nos dice cuanto tiempo he
tardado en dar al botón una vez cargada la página.
*/


addEventListener('load', inicio, false);
var horaInicio = new Date();
console.log(horaInicio);

function inicio() {
    btnParar.addEventListener('click', parar, false);
}

function parar(){
    document.write(`Desde que has dado al boton hasta que has parado han pasado ${ new Date()-horaInicio} ms`);

}

