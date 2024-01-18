/* 
Crea un menú básico de navegación con cinco enlaces. Asigna a dos de ellos el atributo
class=”enlace”. Luego recorre todo el menú y comprueba si existe el atributo class. Si
existe, debes cambiar el valor del atributo a “nuevoEnlace”. Si no existe debes ponerle
el valor “enlace”.
*/
addEventListener('load',inicio);

function inicio(){
    btnCambiar.addEventListener('click', aplicar);
}

function aplicar(){
    document.querySelectorAll('a').forEach(element => {
        if(element.hasAttribute('class')){
            element.setAttribute('class','nuevoEnlace');
        }else{
            element.setAttribute('class','enlace');
        }
    });
}

 
 
 