/* 
Disponemos de una caja de texto para entrada de datos y un botón, iremos creando
un array con los datos que introduzcamos, se pide crear un select con esos datos y
también crear una lista. El select y la lista estarán en diferentes secciones (section) de
la página.
*/
addEventListener('load', inicio);



function inicio() {
    var btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click', insertar);
}


function insertar() {
    //recogo los objetos del dom
    var inputDatos = document.getElementById('campoDatos');
    var lista = document.getElementById('listaDatos');
    var select = document.getElementById('selectDatos');

    //recogo el dato
    let dato = inputDatos.value;

    //creo los objetos y los añado a sus padres
    var li = document.createElement('li');
    li.textContent = dato;

    lista.appendChild(li);

    var option = document.createElement('option');
    option.textContent = dato;
   select.appendChild(option);

}


