var a;
var b=null;
var c="aa";
var d=15;
var e=true;

alert("La variable a es: "+typeof(a)+" y el valor es "+a
+"\t\nLa variable b es: "+typeof(b)+" y el valor es "+b
+"\t\nLa variable c es: "+typeof(c)+" y el valor es "+c
+"\t\nLa variable d es: "+typeof(d)+" y el valor es "+d
+"\t\nLa variable e es: "+typeof(e)+" y el valor es "+e);


document.write("La variable a es: "+typeof(a)+" y el valor es "+a
+"<br>La variable b es: "+typeof(b)+" y el valor es "+b
+"<br>La variable c es: "+typeof(c)+" y el valor es "+c
+"<br>La variable d es: "+typeof(d)+" y el valor es "+d
+"<br>La variable e es: "+typeof(e)+" y el valor es "+e);


(function(){
    console.log(x);
    if(true){
        var x = "hola mundo";
    }

    console.log(x);
})();

(function(){
    console.log(x);
    if(true){
        let x = "hola mundo";
    }

    console.log(x);
})();
