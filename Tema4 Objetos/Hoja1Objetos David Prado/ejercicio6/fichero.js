/*
Utilizando los recorridos vistos en la teoría, muestra todas las propiedades de
los tres objetos creados en la solución de la actividad anterior.
*/class Miembro {
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

let miembro = new Miembro("Pedro","13-10-2022","Inactivo");
let felipe = new Profesor("Felipe","17-9-2023","activo",12);
let david = new Alumno("David","13-10-2023","activo",4);

console.log("Miembro");
for (let elemento of Object.getOwnPropertyNames(miembro)) {
    console.log(elemento);
}
console.log("Profesor");

for (let elemento of Object.getOwnPropertyNames(felipe)) {
    console.log(elemento);
}
console.log("Alumno");

for (let elemento of Object.getOwnPropertyNames(david)) {
    console.log(elemento);
}
