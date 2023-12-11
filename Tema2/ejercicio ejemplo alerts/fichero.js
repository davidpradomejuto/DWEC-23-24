var nombre="";
var edad=0;
var apellidos="";
var anio=0;


nombre=prompt("Cual es tu nombre: ");
apellidos=prompt("Cual es tu apellidos: ");
edad=prompt("Cual es tu edad: ");
anio=prompt("Cual es tu año de nacimiento: ");

alert("¡Hola, 'buenos dias!'");

alert("Mi nombre es "+nombre+"\nMi Apellido es "+apellidos);

alert("la suma de mi año de nacimiento y mi edad es: "+(parseInt(edad)+parseInt(anio)));

alert("la suma es "+edad+nombre+anio+apellidos);
