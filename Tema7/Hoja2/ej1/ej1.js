addEventListener('load', () => {
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        alert('No puedes abrir el menú contextual');
    });
});