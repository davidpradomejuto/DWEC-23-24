class Coche {
    
    constructor(marca, modelo, fecha) {
        this.marca = marca;
        this.modelo = modelo;
        this.fecha = fecha;
    }

    imprime(){
        return `<td>${this.marca}</td><td>${this.modelo}</td><td> ${this.fecha}</td>`;
    }

}


let coches = [new Coche("Opel", "zafira", "1-1-2003"), new Coche("seat", "ibiza", "1-1-2014"), new Coche("renault", "5", "1-1-2007"), new Coche("renault", "11", "1-1-1998")];

document.write("<table><tr><th>MARCA</th><th>MODELO</th><th>FECHA</th></tr>");

for (let coche of coches) {
    document.write(`<tr> ${coche.imprime()}</tr>`);
}
document.write("</table>");