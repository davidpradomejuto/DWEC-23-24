/* 
Crea una aplicación web con un formulario en el que:

a. Se podrá seleccionar si se quiere calcular área o volumen

b. Se podrá seleccionar de qué figura se quiere calcular el área o el
volumen, teniendo como opciones el cilindro, la esfera, el cono y el cubo.

c. Se necesitará varios cuadros de texto en los que incluir los datos
necesarios para realizar estas operaciones y un botón que permita
obtener los resultados.
*/


addEventListener('load', inicio, false);

function inicio() {
    btnCalcular.addEventListener('click', calcular, false);
}

function calcular() {
    var accion = selectAccion.value;
    var forma = selectForma.value;

    console.log(accion);
    console.log(forma);

    if (accion == 'area') {
        if (forma == 'cilindro') {
            // necesitamos h y r 

            let h = prompt('introduce la altura del cilindro');
            let r = prompt('introduce la radio del cilindro');
            let area = 2 * Math.PI * r * (h + r);

            resultados.value = `El area del cilindro es de ${area}`;

        } else if (forma == 'esfera') {
            // necesitamos r 

            let r = prompt('introduce la radio de la esfera');
            let area = 4 * Math.PI * Math.pow(r, 2);

            resultados.value = `El area del esfera es de ${area}`;
        } else if (forma == 'cono') {
            // necesitamos R, y G
            let r = prompt('introduce la radio del cono');
            let g = prompt('introduce la G, (que no se que es) del cono');

            let area = Math.PI * Math.pow(r, 2) + Math.PI * r * g;

            resultados.value = `El area del cono es de ${area}`;
        } else {

            let a = prompt('introduce el lado del cubo');
            let area = 6 * Math.pow(a, 2);
            resultados.value = `El area del cubo es de ${area}`;

        }
    } else {
        if (forma == 'cilindro') {
            // necesitamos h y r 

            let h = prompt('introduce la altura del cilindro');
            let r = prompt('introduce la radio del cilindro');
            let volumen = Math.PI * Math.pow(r, 2)*h;

            resultados.value = `El volumen del cilindro es de ${volumen}`;

        } else if (forma == 'esfera') {
            // necesitamos r 

            let r = prompt('introduce la radio de la esfera');
            let volumen = 4/3 * Math.PI * Math.pow(r, 3);

            resultados.value = `El volumen del esfera es de ${volumen}`;

        } else if (forma == 'cono') {
            // necesitamos H y R
            let r = prompt('introduce la radio del cono');
            let h = prompt('introduce la altura, del cono');

            let volumen = (Math.PI * Math.pow(r, 2) * h)/3;

            resultados.value = `El volumen del cono es de ${volumen}`;
        } else {

            let a = prompt('introduce el lado del cubo');
            let volumen = Math.pow(a, 3);
            resultados.value = `El volumen del cubo es de ${volumen}`;

        }
    }
}