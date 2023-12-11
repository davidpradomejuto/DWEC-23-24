var vector = [1,9,4,2,2,6,4,3,6,6,9];
var posiciones = [];

var repetidos = 0;

//ordeno el array
vector.sort();

document.write(`Los numeros ordenados son: ${vector.toString()} <br>`);

//contador para empezar a comparar en 1+ cada vez que se complete un bucle
//para no evaluar 2 veces en el mismo numero
var contador =0;

for (let i = contador; i < vector.length; i++) {

    let numeroParaComparar = vector[i];

    for (let j = contador; j < vector.length; j++) {

        if (i != j) {

            if(numeroParaComparar === vector[j]){
                repetidos++;
                posiciones.push(j);
            }

        }
    }
    contador++;
}

//lo divido entre 2 por que como hay 2 o 3 iguales


document.write(`Los numeros repetidos son: ${repetidos}`);

document.write(` y estan en las posiciones: ${posiciones.toString()}`);




