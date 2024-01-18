/* 
Realizar un script que cuando pulse un botón, clone este trozo de código HTML y lo
añada en otro nuevo section.
Realizar un documento HTML con un section en el cual están estos enlaces
&lt;a href=”#”&gt;Enlace 1&lt;/a&gt;&lt;br&gt;
&lt;a href=”#”&gt;Enlace 2&lt;/a&gt;&lt;br&gt;
&lt;a href=”#”&gt;Enlace 3&lt;/a&gt;&lt;br&gt;
*/

addEventListener('DOMContentLoaded',inicio);

function inicio(){
    var contenedor = document.querySelector('#contenedor');
    btnAddP.addEventListener('click',addP);

}

function addP(){
    var section = document.createElement('section');
    section.innerHTML='<a href=”#”>Enlace 1</a><br><a href=”#”>Enlace 2</a><br><a href=”#”>Enlace 3</a><br>';
    contenedor.appendChild(section);
}
