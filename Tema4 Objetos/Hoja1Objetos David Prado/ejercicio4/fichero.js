/*
Cree un script que defina un objeto llamado Producto_alimenticio. Este objeto
debe presentar las propiedades código, nombre y precio, además del método
imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.

Posteriormente, cree tres instancias de este objeto y guárdelas en un array.

Con la ayuda del bucle for, utilice el método imprimeDatos para mostrar por
pantalla los valores de los tres objetos instanciados.
*/
class Producto_alimenticio {

    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        return `codigo => ${this.codigo} nombre => ${this.nombre} precio => ${this.precio} €`;
    }
}

let productos = [
    new Producto_alimenticio(1, "arroz", 1.45), 
    new Producto_alimenticio(2, "leche",2.2), 
    new Producto_alimenticio(3, "chocolate", 3.50)
];


for (let producto of productos) {
    document.write(`${producto.imprimeDatos()}<br>`);
}
