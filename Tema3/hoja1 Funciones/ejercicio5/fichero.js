
function rondasDados(numero = 5){
    for (var i = 1; i <= numero; i++){
        
        let n1 =  Math.floor(Math.random() * (6 - 1) + 1);
        n1+=Math.floor(Math.random() * (6 - 1) + 1);

        let n2 =  Math.floor(Math.random() * (6 - 1) + 1);
        n2 =+  Math.floor(Math.random() * (6 - 1) + 1);

        if(n1 > n2){
            document.write(`El ganador de la ronda numero ${i} es el primer jugador<br>`);
        }else if(n2 == n1){
            document.write(`La ronda numero ${i} ha quedado en empate<br>`);
        }else{
            document.write(`El ganador de la ronda numero ${i} es el segundo jugador<br>`);
        }
    }
}

rondasDados(3);

rondasDados();

rondasDados(10);


/*
Escribe una función que reciba como parámetro un número entero (número de rondas
de la partida), por defecto establecido a 5.

Debes simular una partida de dados con lanzamientos aleatorios.

Hay dos jugadores que lanzan dos dados una vez en cada ronda. 

La suma de los dados se anota y se pasa a la siguiente ronda. 

Al final de todas las rondas el programa debe proporcionar un ganador y mostrar las puntuaciones
acumuladas de ambos. 

El programa debe funcionar correctamente tras atender estas
llamadas:
a. jugar()
b. jugar(3)
c. jugar(10)
 */