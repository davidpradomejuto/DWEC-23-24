window.addEventListener('load', () => {
    var lista = document.querySelector('ul');

    var aniadir = document.querySelector('#btnAniadir');

    var elementos = lista.children;

    Array.from(elementos).forEach(elemento => {
        elemento.querySelector('span').addEventListener("click", (objeto) => {
            elemento.remove();
        });
    });

    aniadir.addEventListener("click", () => {
        let texto = prompt('Escribe lo que quieras añadir');
        let li = document.createElement('li');
        li.innerHTML = "<span>|x|</span>" + texto;
        //le añado un add event listener propio para poder eliminarlo
        li.addEventListener("click", (objeto) => {
            li.remove();
        });
        //añado el li Al ul 
        lista.appendChild(li);
       
    });
    
    let draggedItem = null;

    lista.addEventListener("dragstart", function(event) {
        draggedItem = event.target;
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    lista.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    lista.addEventListener("drop", function(event) {
        event.preventDefault();
        var id = event.dataTransfer.getData("text/plain");
        var droppedItem = document.getElementById(id);

        if (draggedItem !== droppedItem) {
            var rect = lista.getBoundingClientRect();
            var offset = event.clientY - rect.top;
            var targetIndex = Math.floor(offset / draggedItem.offsetHeight);

            if (targetIndex > Array.from(lista.children).indexOf(draggedItem)) {
                lista.insertBefore(draggedItem, lista.children[targetIndex + 1]);
            } else {
                lista.insertBefore(draggedItem, lista.children[targetIndex]);
            }
        }
    });
});
``
