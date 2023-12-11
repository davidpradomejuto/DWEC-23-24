var operacion1 = (10 == 10);
alert("La operacion 10 == 10 es "+operacion1);


var operacion2 = (10 === 10);
alert("La operacion 10 === 10 es "+operacion2);

var operacion3 = (10 == 10.0);
alert("La operacion 10 == 10.0 es "+operacion3);

var operacion4 = ("Laura" == "laura");
alert("La operacion 'Laura' == 'laura' es "+operacion4);

//esta operacion da false
var operacion5 = ("Laura" > "laura");
alert("La operacion 'Laura' > 'laura' es "+operacion5);

//esta operacion da false
var operacion6 = ("Laura" < "laura");
alert("La operacion 'Laura' < 'laura' es "+operacion6);

//da true por que los 2 iguales solo comparan mismo contenido
var operacion7 = ("123" == 123);
alert("La operacion '123' == 123 es "+operacion7);
//dara error por que los 3 iguales tambien comparan tipo de dato
var operacion8 = ("123" === 123);
alert("La operacion '123' === 123 es "+operacion8);

//de string a int , dara true
var operacion9 = ( parseInt("123") === 123);
alert("La operacion parseint('123') == 123 es "+operacion1);


