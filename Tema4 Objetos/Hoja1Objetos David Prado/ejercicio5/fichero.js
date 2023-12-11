/*
Crea una jerarquía de clases y úsalas en un programa para ejemplificar los
conceptos de herencia y polimorfismo.

Crea una clase inicial de nombre “Miembro” que tenga las propiedades
nombre, alta (fecha de alta) y estado (vigente, finalizado) y el método cobrar,
que muestre por consola un mensaje de que el usuario ha cobrado.

Se creará otras dos clases que heredarán las características de la anterior
clase:

    a. La primera de nombre “Profesor”, que tendrá la propiedad número de
    alumnos, además de las tres propiedades de la clase Miembro, así como el
    método cobrar.

    b. La segunda de nombre “Alumno”, que tendrá la propiedad número de
    asignaturas, así como las tres propiedades de la clase Miembro, además
    del método cobrar.
*/
class Miembro {
    //CLASE PADRE MIEMBRO
    constructor(nombre, alta, estado) {
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }

    cobrar(){
       console.log(`El usuario ${this.nombre} ha cobrado.`);
    }
}

class Profesor extends Miembro{
    //CLASE Hija Profesor
    constructor(nombre, alta, estado,nAlumnos) {
        super(nombre,alta,estado);
        this.nAlumnos=nAlumnos;
    }

    cobrar(){
       super.cobrar();
    }
}

class Alumno extends Miembro{
    //CLASE Hija Alumno
    constructor(nombre, alta, estado,nAsignaturas) {
        super(nombre,alta,estado);
        this.nAsignaturas=nAsignaturas;
    }

    cobrar(){
       super.cobrar();
    }
}

let felipe = new Profesor("Felipe","17-9-2023","activo",12);
let david = new Alumno("David","13-10-2023","activo",4);
let miembro = new Alumno("Pedro","13-10-2022","Inactivo");

felipe.cobrar();
david.cobrar();
miembro.cobrar();