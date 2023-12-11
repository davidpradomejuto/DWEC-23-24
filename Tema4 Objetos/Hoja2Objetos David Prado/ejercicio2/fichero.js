/* 
Escribe un programa con herencia de clases que permita modelar los objetos
Teléfono, Fijo y Móvil, de manera que Teléfono sea la clase madre y Fijo y
Móvil, clases derivadas.
*/

class Telefono {
    constructor(numero) {
        this.numero = numero;
    }

    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
}

class Movil extends Telefono {
    constructor(numero, marca) {
        this.numero = numero;
        this.marca = marca;
    }

    getMarca() {
        return this.numero;
    }

    setMarca(marca) {
        this.marca = marca;
    }
}

class Fijo extends Telefono {
    constructor(numero, prefijo) {
        this.numero = numero;
        this.prefijo = prefijo;
    }

    getPrefijo() {
        return this.prefijo;
    }
    
    setPrefijo(prefijo) {
        this.prefijo = prefijo;
    }
}