/* 
Elabora un programa que permita añadir filas a una tabla HTML. (Busca
información acerca de los métodos para insertar filas y columnas).
*/
addEventListener('DOMContentLoaded',inicio);

function inicio(){
    btnAddRow.addEventListener('click',addRow);
    btnAddColumn.addEventListener('click',addColumn);
    var tabla = document.getElementById('tabla');

}

function addRow(){

    //cojo el primer TR para saber el numero de columnas que tengo que añadir
    let primerTr = document.getElementsByTagName('tr')[0];

    //genero una fila
    var row = document.createElement('tr');

    //añado las celdas interiores
        for (let i = 0; i < primerTr.children.length; i++) {
            let td = document.createElement('td');
            td.textContent='cell';
            //a la fila añado las celdas
            row.appendChild(td);  
        }
    
        //añado la fila a la tabla
    tabla.appendChild(row);
}

function addColumn(){
    
    document.querySelectorAll('tr').forEach(element => {
        //genero una celda y añado el texto cell
        let td = document.createElement('td');
        td.textContent='cell';
        //añado a cada TR su celda
        element.appendChild(td);
    });
    

}