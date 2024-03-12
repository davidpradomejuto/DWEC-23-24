addEventListener('DOMContentLoaded',()=>{
    //recogo los campos
    var campo1= document.querySelector('#campo1');
    var campo2= document.querySelector('#campo2');
    var comprobar= document.querySelector('#comprobar');

    //genero los eventos
    campo1.addEventListener('keypress',()=>{
        comprobarNumeros(campo1);
    });
    comprobar.addEventListener('click',()=>{
        comprobarFechas(campo2);
    });

    //compruebo el primer campo
    function comprobarNumeros(campo){
        //como no esta funcionando!!!! le estoy diciendo que empieze y termine por un digito del 0-9 no lo entiendo
        let regex = new RegExp('^[0-9]+$');
        if(!regex.test(campo.value)){
            alert('Has introducido una letra en el campo');
        }
        console.log(regex.test(campo.value));
    }

    //compruebo el segundo campo
    function comprobarFechas(campo){
        //esto tampoco lo entiendo se supone que deja de 1 a 2 numeros despues una / otros 1 o 2 numeros, otra / y 4 numero mas
        let regex = new RegExp('\d{1,2}\/\d{1,2}\/\d{4}');
        if(!regex.test(campo.value)){
            alert('Has introducido una fecha invalida en el campo');
        }
        console.log(regex.test(campo.value));
    }
})

