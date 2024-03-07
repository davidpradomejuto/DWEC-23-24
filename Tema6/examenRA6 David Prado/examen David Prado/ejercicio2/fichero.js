/* 
*/
var nombreUsuario = "";
addEventListener('load', () => {
    nombreUsuario = prompt('Introduce el nombre del jugador');
    //si el jugador no a introducido nada le pongo uno por defecto
    if (nombreUsuario == "" || nombreUsuario == null)
        nombreUsuario = "Jugador 1";

});


addEventListener('DOMContentLoaded', () => {
    var puntuacion = 0;
    var contadorDePregunta = 0;

    var TablaResutados = document.querySelector("#TablaResutados");
    var TablaClasificacion = document.querySelector("#TablaClasificacion");
    var panelResultados = document.querySelector("#divResultados");
    var divPreguntas = document.querySelector("#divPreguntas");
    document.querySelector("#divRegistro").style.display = "none";

    //las categorias dan igual por que no se elige categoria ni nada
    //asi que las mezclo en un mapa
    var categorias = new Map([
        [1, "¿Quién es el protagonista de Breaking Bad?"],
        [2, "¿En qué año se estrenó la serie Friends?"],
        [3, "¿Cuál es la capital de Japón?"],
        [4, "¿Cuál es el río más largo de América del Norte?"],
        [5, "¿Cuál es el símbolo químico del oro?"],
        [6, "¿Cuál es la capa más externa de la Tierra?"]
    ]);
    var opciones = new Map([
        [1, ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"]],
        [2, ["1994", "1996", "1998", "2000"]],
        [3, ["Pekín", "Seúl", "Tokio", "Bangkok"]],
        [4, ["Mississippi", "Yukón", "Columbia", "Colorado"]],
        [5, ["Au", "Ag", "Fe", "Cu"]],
        [6, ["Núcleo", "Manto", "Corteza", "Núcleo Externo"]]
    ]);

    var opcionesValidas = new Map([
        [1, "Walter White"],
        [2, "1994"],
        [3, "Tokio"],
        [4, "Mississippi"],
        [5, "Au"],
        [6, "Corteza"]
    ]);

    btnSiguiente.addEventListener('click', siguiente);
    btnAnterior.addEventListener('click', anterior);
    btnReiniciar.addEventListener('click', reiniciar);

    function siguiente() {
        //al darle al boton de siguiente muestro el div de las tablas
        document.querySelector("#divRegistro").style.display = "block";

        //si se llega a la ultima pregunta no dejo que se siga
        if (contadorDePregunta > 5) {
            alert('No puedes ir a la pregunta siguiente');
        } else {
            contadorDePregunta++;
            mostrarPregunta(contadorDePregunta);
        }
    }

    function anterior() {
        //si se llega a la primera pregunta no dejo ir a la anterior
        if (contadorDePregunta < 2) {
            alert('No puedes ir a la pregunta anterior');
        } else {
            contadorDePregunta--;
            mostrarPregunta(contadorDePregunta);
        }
    }

    function mostrarPregunta(numeroDePregunta) {
        divPreguntas.innerHTML = "";
        //genero un h1 con la pregunta y le añado al div
        let pregunta = document.createElement('h1');
        pregunta.textContent = categorias.get(numeroDePregunta);
        divPreguntas.appendChild(pregunta);

        //genero 4 botones con cada respuesta
        if (numeroDePregunta <= 6) {
            //genero un div para meter dentro los botones , es solo para maquetarlo con el flex
            let divParaLosBotones = document.createElement('div');

            //itero el mapa de las opciones y genero un boton con cada opcion
            opciones.get(numeroDePregunta).forEach(element => {
                
                //genero un boton
                let boton = document.createElement('button');
                boton.value = element;
                boton.textContent = element;
                //le añado a cada boton un listener para que si se clicka
                //se compruebe la pregunta
                boton.addEventListener('click', () => { comprobarPregunta(boton) });

                //lo añado al DIV de maquetado
                divParaLosBotones.appendChild(boton);
            });
            //añado el div de maquetado al div de las preguntas
            divPreguntas.appendChild(divParaLosBotones);

        }
    }

    function comprobarPregunta(boton) {
        //genero una fila y sus columnas para meterlo en la tabla de resultados
        let fila = document.createElement('tr');

        //genero todas las columnas que necesito y las pongo texto y la añado a la fila
        let tdPregunta = document.createElement('td');
        tdPregunta.textContent = categorias.get(contadorDePregunta);
        fila.appendChild(tdPregunta);
        let tdRespuestaUsuario = document.createElement('td');
        tdRespuestaUsuario.textContent = boton.value;
        fila.appendChild(tdRespuestaUsuario);

        let tdRespuestaCorrecta = document.createElement('td');
        tdRespuestaCorrecta.textContent = opcionesValidas.get(contadorDePregunta);
        fila.appendChild(tdRespuestaCorrecta);

        let tdPuntuacion = document.createElement('td');

        if (opcionesValidas.get(contadorDePregunta) == boton.value) {
            //llamo al a funcion que muestra el mensaje
            mostrarResultado(true);
            //aumento la puntuacion 
            puntuacion += 10;
            tdPuntuacion.textContent = '+10';
            //muestro la siguiente pregunta
            contadorDePregunta++;
            mostrarPregunta(contadorDePregunta);
        } else {
            //llamo al a funcion que muestra el mensaje
            mostrarResultado(false);
            //disminuyo la puntuacion 
            puntuacion -= 5;
            tdPuntuacion.textContent = '-5';
            //muestro la siguiente pregunta
            contadorDePregunta++;
            mostrarPregunta(contadorDePregunta);
        }
        fila.appendChild(tdPuntuacion);

        //añado la fila a la tabla
        TablaResutados.appendChild(fila);

        console.log("pregunta numero " + contadorDePregunta)
        //si se ha completado la ultima pregunta muestro la clasificacion y mando un alert
        if (contadorDePregunta == 7) {
            mostrarClasificacion();
            btnAnterior.disabled = true;
            btnSiguiente.disabled = true;
            alert('has llegado al final del juego');
        }
    }

    //funcion para mostra el texto de que el jugador ha ganado +10 o -5 puntos
    function mostrarResultado(resultado) {
        //primero lo limpio
        panelResultados.textContent = "";
        //si resultado es true muestro +10 , si es false muestro -5
        if (resultado) {
            panelResultados.innerHTML = "<h2>Respuesta Correcta +10 puntos</h2>";
        } else {
            panelResultados.innerHTML = "<h2>Respuesta Incorrecta -5 puntos</h2>";
        }
    }

    //funcion para mostra la clasificacion del usuario
    function mostrarClasificacion() {
        //genero una fila y sus columnas para meterlo en la tabla de clasificion
        let fila = document.createElement('tr');

        //genero las columnas que necesito , las pongo texto y las añado a la fila
        let tdUsuario = document.createElement('td');
        tdUsuario.textContent = nombreUsuario;
        fila.appendChild(tdUsuario);

        let tdPuntuacion = document.createElement('td');
        tdPuntuacion.textContent = puntuacion;
        fila.appendChild(tdPuntuacion);

        //añado la fila a la tabla
        TablaClasificacion.appendChild(fila);
    }

    function reiniciar() {
        //al darle al boton de reiniciar bajo la puntuacion a 0, hago que los botones se deshabiliten
        puntuacion = 0;
        btnAnterior.disabled = true;
        btnSiguiente.disabled = false;
        //vuelvo a poner la pregunta de inicio
        contadorDePregunta = 0;
        //y vacio todos los DIVs
        panelResultados.innerHTML = "";
        TablaResutados.innerHTML = "";
        divPreguntas.innerHTML = "---Dale al boton de siguiente para comenzar---";
    }

});
