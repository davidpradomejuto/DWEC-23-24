let regex = /^[A-Z]+$/;
var j = true;
while (j) {
    var opcion = prompt("Indica la opcion \nA- Área del triángulo (b*h/2)\nB- Área del rectángulo (b*h)\nC-Área del círculo (π*r2)\nD-Salir");
    
    if (opcion != null && regex.test(opcion) && opcion.length == 1) {

        switch (opcion) {
            case "A":
                var base = parseInt(prompt("Indica la base"));
                var altura = parseInt(prompt("Indica la altura"));
                var resultado = ((base * altura) / 2);
                confirm(`El Área del triángulo con ${base} x altura ${altura} es ${resultado}`);

                break;

            case "B":
                var base = parseInt(prompt("Indica la base"));
                var altura = parseInt(prompt("Indica la altura"));
                var resultado = (base * altura);
                confirm(`El Área del rectángulo con ${base} x altura ${altura} es ${resultado}`);

                break;

            case "C":
                var radio =  parseInt(prompt("Indica el radio"));
                var resultado = (Math.PI * radio ^ 2);
                confirm(`El area del circulo con radio ${radio} es ${resultado}`);
                break;

            case "D":
                alert("Adios");
                j = false;
                break;
        }
        
    } else {
        alert("Error: Debes introducir una opcion valida (A,B,C,D)")
    }

}
/*
7.	Escribe un programa que ponga en práctica la siguiente lógica:
•	Mostrará el siguiente menú y el usuario deberá elegir una de las opciones:
a)	Área del triángulo (b*h/2)
b)	Área del rectángulo (b*h)
c)	Área del círculo (π*r2)
d)	Salir
•	En función de la opción que elija el usuario, se le pedirán los datos necesarios en cada caso.
•	El programa calculará el resultado y los mostrará por pantalla.
•	La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la tecla de salir. 

*/