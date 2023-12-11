/*
Crea una clase para modelar un objeto “telefonía móvil” que tenga al menos
estas propiedades= CPU, RAM, Almacenamiento, Ancho, Alto y numCamaras.

Añade también un método llamado toString() que muestre en pantalla la
información del objeto creado. 

Crea cuatro objetos con distintos números de
parámetros en la creación y muestra en pantalla la información de cada objeto.*/


class telefoniaMovil {

    cpu; ram; Almacenamiento; Ancho; Alto; numCamaras;

    constructor(cpu, ram, Almacenamiento, Ancho, Alto, numCamaras) {
        this.cpu = cpu;
        this.ram = ram;
        this.Almacenamiento = Almacenamiento;
        this.Ancho = Ancho;
        this.Alto = numCamaras;

    }

    toString() {
        return (`CPU : ${this.cpu} ram : ${this.ram} Almacenamiento : ${this.Almacenamiento} Ancho : ${this.Ancho} Alto : ${this.Alto}`);
    }
}


samsumg = new telefoniaMovil("samsumg A14", "6GB", "128GB", 123, 321);
apple = new telefoniaMovil("apple P33", "6GB", "64GB", 88, 555);
xiaomi = new telefoniaMovil("xiaomi G12", "6GB", "31GB", 44, 777);

console.log(samsumg.toString());
console.log(apple.toString());
console.log(xiaomi.toString());