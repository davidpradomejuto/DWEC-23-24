addEventListener('load', () => {
    
    var botones = document.querySelectorAll('input[type="button"]');

    botones.forEach(boton => {
        boton.addEventListener('click',() => {mostrar(boton)});
    });

    function mostrar(boton){
        alert(`Valor del boton ${boton.value}`);
    }
});

// Creamos un formulario con tres botones, cada uno con un valor en la propiedad value
// diferente. Se trata de asignar el evento clic a cada uno y visualizar el valor de la
// propiedad value. Los tres tendrán la misma función en común que mostrará en un
// alert el contenido de value.