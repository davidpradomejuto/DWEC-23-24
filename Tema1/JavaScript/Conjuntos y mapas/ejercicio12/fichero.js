/*
Crea una aplicación que muestre cincuenta combinaciones para jugar a la lotería. Las
combinaciones son 6 números del 1 al 49, pero hay que tener en cuenta que no se
pueden repetir los números.
*/

var combinaciones = new Set();

document.write(`Las 50 combinaciones sacadas pueden ser: <br>`);

for (let i = 0; i <50;i++) {

    let listaNumeros = new Set();
    let combinacion='';

    //este bucle es para realizar el numero aleatorio 6 veces
    for (let j = 0; j < 6;j++) {
        let noRepetidos = false;
        while (!noRepetidos){
            let numeroAleatorio = Math.floor(Math.random() * 49) + 1;

            if(!listaNumeros.has(numeroAleatorio)){

                listaNumeros.add(numeroAleatorio);
                noRepetidos=true;

            }

        }
    }

    var vector = Array.from(listaNumeros);

    for (let k = 0; k < vector.length; k++) {
        
        combinacion+=vector[k].toString()+' ';
        
    }

    document.write(`${combinacion}<br>`);
}