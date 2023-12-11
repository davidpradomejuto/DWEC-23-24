/* 
Define un objeto, con función constructora, con nombre DatosPersonales que
tenga, como propiedades, el nombre, el DNI, la dirección y el teléfono.


2. Define un objeto, con función constructora, con nombre CuentaCorriente que
tenga como propiedades, los datos personales, el número de cuenta y el saldo,
además de cuatro métodos:


3. A través del formulario inicial se recogerán datos, además de realizar cálculos,
para:
        a. Crear y almacenar los datos de una persona
        b. Crear y almacenar los datos de una cuenta bancaria
        c. Visualizar todos los datos del banco
        d. Aumentar el saldo
        e. Retención de saldo del 10%
        f. Aumento específico dado por el cliente
        g. Retención específica dada por el cliente
*/

class DatosPersonales {
    constructor(nombre, dni, direccion, telefono) {
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

class CuentaCorriente {

    constructor(datosPersonales, numeroCuenta, saldo) {
        this.datosPersonales = datosPersonales;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    setDatosPersonales(datosPersonales) {
        this.datosPersonales = datosPersonales;
    }

    Visualizar() { /* a. Visualizar: devuelve el nombre de los datos personales*/
        return `Nombre: ${this.datosPersonales.nombre}`;
    }

    verTodo() { /*b. verTodo: devuelve el número de cuenta, el saldo, el nombre, el dni, la dirección y el teléfono */
        return `DNI: ${this.datosPersonales.dni}, Nombre: ${this.datosPersonales.nombre},Dirección: ${this.datosPersonales.direccion}, Telefono: ${this.datosPersonales.telefono}, Saldo: ${this.saldo} €`;
    }
    abono(cantidad) { /*c. abono: al que se le pasa una cantidad, ingreso y devolverá el saldo final tras el ingreso*/
        this.saldo += parseFloat(cantidad);
        return this.saldo;
    }

    cargo(cantidad) { /* d. cargo: al que se le pasa una cantidad, retiro, y devolverá el saldo final tras el retiro. */
        this.saldo -= parseFloat(cantidad);
        return this.saldo;
    }
}

