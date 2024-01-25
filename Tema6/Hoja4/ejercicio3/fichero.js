/* 
Elabora un programa que le solicite al usuario el número de filas y columnas, y genere
esa tabla rellena con números aleatorios. Finalmente, el programa debe recorrer la
tabla y mostrar en consola cuántas filas y columnas ha detectado.
*/
addEventListener('load', inicio);

function inicio() {
    

    
        var filas = prompt('Introduce las filas');
        var columnas = prompt('Introduce las columnas');

        var contenedor = document.querySelector('#contenedor');


        let lista = document.createElement('table');

        for (let i = 0; i < parseInt(filas); i++) {
            let tr = document.createElement('tr');

            for (let j = 0; j < parseInt(columnas); j++) {
                let td = document.createElement('td');

                td.innerText = Math.floor(Math.random() * 100) + 1;

                tr.appendChild(td);
                
            }
            lista.appendChild(tr);
        }

        contenedor.appendChild(lista);

        
    
}
