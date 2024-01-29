addEventListener('load',inicio)

function inicio(){
    var cuadro1 = document.querySelector('#cuadro1');
    var cuadro2 = document.querySelector('#cuadro2');
    var cuadro3 = document.querySelector('#cuadro3');

    cuadro1.addEventListener('click', () => { cambiarFondo(cuadro1)});
    cuadro2.addEventListener('click', () => { cambiarFondo(cuadro2)});
    cuadro3.addEventListener('click', () => { cambiarFondo(cuadro3)});

    function cambiarFondo(cuadro){
        let color = cuadro.style.backgroundColor;
        document.querySelector("body").style.backgroundColor = color;
        console.log(color);
    }
}

