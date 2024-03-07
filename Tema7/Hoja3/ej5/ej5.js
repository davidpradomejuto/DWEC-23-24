addEventListener('load', () => {

    var filasdeAlto = 10000;
    var anchoDelTablero = 700;

    //tablero
    var tablero = document.querySelector('#zonadibujo');
    var paleta = document.querySelector('#paleta');
    var borrarTodo = document.querySelector('#borrarTodo');
    var borrarTodo = document.querySelector('#borrarTodo');
    var borrarTodo = document.querySelector('#borrarTodo');

    var color = '#000000';

    //variable para saber si esta clicando
    var clicando = false;
    var rejillaActivada=false;

    paleta.addEventListener('change', () => {
        color = paleta.value;
    });

        /*evento para */

    borrarTodo.addEventListener('click', () => {
        document.querySelectorAll('#zonadibujo div').forEach(celda => {
            celda.style.backgroundColor = '#ffffff';
        });
    });

    ActivaRejilla.addEventListener('click', () => {
        if(rejillaActivada){
            rejillaActivada=false;
            document.querySelectorAll('#zonadibujo div').forEach(celda => {
                celda.style.border = '0px solid black';
            });
        }else{
            rejillaActivada=true;
            document.querySelectorAll('#zonadibujo div').forEach(celda => {
                celda.style.border = '1px solid black';
            });
        }
    });


    //genero el tablero
    generarTablero();

    /*Funcion para evaluar si se debe pintar o no*/
    tablero.addEventListener('mousedown', () => {
        if (!clicando) {
            clicando = true;
        } else {
            clicando = false;
        }
        console.log(clicando);
    });



    function generarTablero() {
        tablero.style.width = anchoDelTablero + 'px';

        for (let i = 0; i < filasdeAlto; i++) {
            let div = document.createElement('div');
            div.style.height = 5 + 'px';
            div.style.width = 5 + 'px';
            //div.style.border = '1px solid black';
            div.style.boxSizing = "border-box";

            div.addEventListener('mouseover', function (event) {
                if (clicando) {
                    pintar(div);
                    console.log('pinta');
                }
            });

            tablero.appendChild(div);
        }

    }

    function pintar(div) {
        div.style.backgroundColor = color;
    }

});

