addEventListener('load', () => {
    var $html = document.querySelector("html");
    
    $html.addEventListener('click', (obj) => {
        console.log("X:"+obj.screenX + " Y:" + obj.screenY);
    });

});