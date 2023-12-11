/* 
Crea una clase con dos propiedades y dos métodos donde se evidencien los
conceptos de abstracción y encapsulamiento de la programación orientada a
objetos.
*/

class usuario {
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad = edad;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
}