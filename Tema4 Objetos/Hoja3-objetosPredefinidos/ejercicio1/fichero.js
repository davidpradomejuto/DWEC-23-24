/* 
Un conocido comercio para el que estás realizando su nuevo sitio web, te ha
encargado que realices una primera validación de las referencias que aparecen
en las etiquetas de sus productos. La etiqueta es de la forma 2023-xrFdS/25_9.
Es decir, los 4 primeros caracteres deben ser numéricos, el siguiente debe ser
un – los cinco siguientes serán combinaciones de letras minúsculas y
mayúsculas, el siguiente carácter será la barra inclinada, los dos siguientes dos
números, después un _ y por último un número.
Crea una clase llamada Etiqueta, que de momento tenga solo dos propiedades,
nombre del artículo; y dos métodos, mostrar artículo y validar etiqueta. Luego
crea un objeto y comprueba que se validan las etiquetas.
*/




class Etiqueta{

    constructor(nombre,etiqueta) {
        this.nombre=nombre;
        this.etiqueta=etiqueta;
    }

    mostrarArticulo(){
        console.log(`Nombre del articulo ${this.nombre} , etiqueta ${this.etiqueta}`);
    }

    validarEtiqueta(){
        let regex = /[0-9]{4}-[a-zA-Z]{5}\/[0-9]{2}_[0-9]/;
        console.log(regex.test(this.etiqueta));
    }
}

var producto1 = new Etiqueta("leche","2023-xrFdS/25_9");

var producto2 = new Etiqueta("chocolate","2023-xr/25_9");


producto1.mostrarArticulo();
producto1.validarEtiqueta();


producto2.mostrarArticulo();
producto2.validarEtiqueta();