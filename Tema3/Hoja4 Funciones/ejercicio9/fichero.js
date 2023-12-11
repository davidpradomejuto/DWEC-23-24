/* 
Crea una función que desarrolle la función de Fibonacci.

 Se trata de una función relacionada con una sucesión de elementos donde los dos primeros elementos son el
cero y el uno, y el resto son la suma de los dos anteriores.

Es decir, la sucesión es 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc. Resuelve la función utilizando recursividad y sin recursividad.
*/

function fibonacciNormal(numeroVeces) {

    let a1 = 0;
    let a2 = 1;
    for (let i = 0; i < numeroVeces; i++) {
        aux = a1;

        console.log(a1 + a2);

        a1 = a2;
        a2 += aux;

    }

}
console.log("Fibonnaci normal");
fibonacciNormal(9);




function fibonacciRecur(n) {
    if (n <= 1) return n;

    return fibonacciRecur(n - 1) + fibonacciRecur(n - 2);
}
//console.log("Fibonnaci recursivo");

numeroDeItems = 10
for (let i = 0; i < numeroDeItems; i++) {
    console.log(fibonacciRecur(i));
};

