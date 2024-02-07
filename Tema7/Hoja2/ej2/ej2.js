window.addEventListener('load', () => {
    var div = document.querySelector('#contenedor');
    var topPosition = 0;
    var leftPosition = 0;

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                topPosition -= 10;
                div.style.top = topPosition + "px";
                break;
            case "ArrowDown":
                topPosition += 10;
                div.style.top = topPosition + "px";
                break;
            case "ArrowRight":
                leftPosition += 10;
                div.style.left = leftPosition + "px";
                break;
            case "ArrowLeft":
                leftPosition -= 10;
                div.style.left = leftPosition + "px";
                break;
        }
    });
});
