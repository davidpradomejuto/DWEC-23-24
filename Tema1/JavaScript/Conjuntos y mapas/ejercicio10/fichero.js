/*
Crea un programa que calcule 10.000 números aleatorios entre 1 y 10. Se mostrará en
una página web la frecuencia con la que ha salido cada número.
*/

var numeros = new Map();

for (let i = 1; i <= 10; i++) {
    numeros.set(i, 0);
}


for (let i = 0; i < 10000; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

     numeros.set(numeroAleatorio, numeros.get(numeroAleatorio) + 1);
}

document.write(
    `<h1>Repeticion de numeros de 1 al 10</h1><br>
    <ul>`
);

for (var [numero,cantidad] of numeros) {
    document.write(`<li>Numero ${numero} -> ${cantidad}</li>`);
}
document.write(`</ul>`);
