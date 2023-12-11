addEventListener('load', inicio, false);
var lista;


function inicio() {
    BtnCrearCuenta.addEventListener("click", CrearCuenta, false);
    //Operaciones Genericas
    BtnAumentarSaldo.addEventListener("click", AumentarSaldo, false);
    BtnRetencion10.addEventListener("click", Retencion10, false);
    BtnVisualizarClientes.addEventListener("click", VisualizarClientes, false);
    //Operaciones Especificas
    BtnAumentarSaldoCliente.addEventListener("click", AumentarSaldoCliente, false);
    BtnRetencionCliente.addEventListener("click", RetencionCliente, false);

    lista = new Set();
}

function CrearCuenta() {
    if (nombre.value !== "" && dni.value !== "" && direccion.value !== "" && telefono.value != "") {
        if (nCuenta.value !== "" && saldo.value !== "") {
            var cuentaCorriente = new CuentaCorriente(new DatosPersonales(nombre.value, dni.value, direccion.value, telefono.value), nCuenta.value, parseFloat(saldo.value));
            lista.add(cuentaCorriente);
            alert("Cuenta creada");
            nombre.value = "";
            dni.value = "";
            direccion.value = "";
            telefono.value = "";
            nCuenta.value = "";
            saldo.value = ""
            console.log(lista);
        } else {
            alert("Debe llenar todos los campos");
        }
    } else {
        alert("Debe llenar todos los campos");
    }
}

function AumentarSaldo() {
    visualizador.value = '';

    for (let cuenta of lista) {
        let subida = 100;
        cuenta.abono(subida);
        //mostrar
        console.log(`Se han sumado ${subida} € a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €`);
        visualizador.value = `${visualizador.value} Se han sumado ${subida} € a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €\n`
    };
}

function Retencion10() {
    visualizador.value = '';
    for (let cuenta of lista) {
        let retencion = 10;
        cuenta.cargo((cuenta.saldo * retencion )/100);
        //mostrar
        console.log(`Se han retenido un ${retencion} % a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €`);
        visualizador.value = `${visualizador.value} Se han retenido un ${retencion} % a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €\n`
    };
}

function VisualizarClientes() {
    visualizador.value = '';

    for (let cuenta of lista) {
        visualizador.value = `${visualizador.value} ${cuenta.verTodo()}\n`
    };
}

function AumentarSaldoCliente() {
    visualizador.value = '';
    existe = false;
    for (let cuenta of lista) {

        //SI EL CLIENTE EXISTE REALIZAR LA ACCION
        if (cuenta.datosPersonales.nombre == nombreCliente.value) {
            existe= true;
            let subida = cantidad.value;
            cuenta.abono(subida);
            //mostrar
            console.log(`Se han sumado ${subida} € a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €`);
            visualizador.value = `${visualizador.value} Se han sumado ${subida} € a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €\n`
        }
    };

    if (!existe) { alert(`El cliente ${nombreCliente.value} no existe en el banco`); }
}

function RetencionCliente() {
    visualizador.value = '';
    existe = false;
    for (let cuenta of lista) {

        //SI EL CLIENTE EXISTE REALIZAR LA ACCION
        if (cuenta.datosPersonales.nombre == nombreCliente.value) {
            existe= true;
            let retencion = cantidad.value;
        cuenta.cargo((cuenta.saldo * retencion )/100);
        //mostrar
        console.log(`Se han retenido un ${retencion} % a la cuenta de ${cuenta.datosPersonales.nombre}`);
        visualizador.value = `${visualizador.value} Se han retenido un ${retencion} % a la cuenta de ${cuenta.datosPersonales.nombre} ahora tiene ${cuenta.saldo} €\n`
        }
    };

    if (!existe) { alert(`El cliente ${nombreCliente.value} no existe en el banco`); }
}
