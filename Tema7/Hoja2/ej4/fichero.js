addEventListener('load', () => {
    var div = document.querySelector('div');
    var limpiar = document.querySelector('#btnLimpiar');

    document.addEventListener("keydown", (event) => {
       div.textContent += ` tecla = '${event.key}'`;
    });

    limpiar.addEventListener('click',() =>{
        div.textContent="";
    });
});