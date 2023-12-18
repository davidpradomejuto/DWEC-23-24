/* 
Crea una página web que muestre el texto “Bienvenido” pero si la hora es de
9:00 a 14:00 y es un día que no es ni sábado, ni domingo.

Si no se cumple esa premisa, entonces se mostrará el texto “Página cerrada”.
*/

var actual = new Date('December 16, 2023 13:15:30');

if(actual.getDay() == 5 || actual.getDay() == 6){
    document.write("Pagina cerrada");
}else{    
    if(actual.getHours()>9 && actual.getHours()<14){
        document.write("Bienvenido");
    }else{
        document.write("Pagina cerrada");
    }
}

