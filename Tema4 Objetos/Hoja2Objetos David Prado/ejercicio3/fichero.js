/* 
Diseña una jerarquía de clases donde Música y Tecnología sean clases
derivadas de Aula, para modelar las instalaciones de un instituto de enseñanza
secundaria. 

Elige un método con el que evidenciar el concepto de polimorfismo.
*/

class Aula {
    constructor(numero) {
        this.numero = numero;
    }

    imprimir(){
        return `El numero de aula es ${this.numero}`;
    }
}

class Musica extends Aula {
    constructor(numero, profesor) {
        super(numero)
        this.profesor = profesor;
    }

    imprimir(){
        return super.imprimir()+` y el Profesor es ${this.profesor}`;
    }
}


class Tecnologia extends Aula {
    constructor(numero, materiales) {
        super(numero)
        this.materiales = materiales;
    }

    imprimir(){
        return super.imprimir()+` y los materiales son ${this.materiales}`;
    }
}


var aula = new Aula(12);
var tecnologia = new Tecnologia(23,"5 clavos, 2 destornilladores,13 lapices");
var musica = new Musica(45,"Felipe");

console.log(aula.imprimir());
console.log(tecnologia.imprimir());
console.log(musica.imprimir());