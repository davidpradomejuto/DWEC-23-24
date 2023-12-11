/* 
Escribe un programa que con la ayuda de una función recursiva muestre en la consola
una variante de la sucesión de Fibonacci en la que cada elemento sea la suma de los
tres anteriores.
*/

function fibonacciRecur(n) {
    if (n <= 2) return n;

    return fibonacciRecur(n - 1) + fibonacciRecur(n - 2) + fibonacciRecur(n - 3);
}
console.log("Fibonnaci recursivo");

numeroDeItems = 10
for (let i = 0; i < numeroDeItems; i++) {
    console.log(fibonacciRecur(i));
};

