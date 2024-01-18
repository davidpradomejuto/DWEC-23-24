
addEventListener('load',inicio);

function inicio(){
    document.getElementById('btnColorRojo').addEventListener('click',colorRojo);
    document.getElementById('btnUnderline').addEventListener('click',underline);
}


function underline(){
    document.getElementById("parrafo").style.textDecoration = "underline";
}

function colorRojo(){
    document.getElementById("parrafo").style.color = "red";
}
 
 
 