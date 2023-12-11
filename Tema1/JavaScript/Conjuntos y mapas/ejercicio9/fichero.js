/*
Crea una estructura de datos que te permita llevar el control de un diccionario de
varios idiomas. 

El idioma de referencia será el español y podrá aparecer la traducción
de cada palabra hasta en tres idiomas.

 Añade cinco palabras en español con sus respectivas traducciones en 
 los tres idiomas y muestra todo el contenido de la estructura en pantalla.
*/

var diccionario = new Map();

diccionario.set('Hablar',new Map().set('Frances','Parler').set('Ingles','Speak').set('Aleman','guntak'));
diccionario.set('Pensar',new Map().set('Frances','Penser').set('Ingles','Think').set('Aleman','Purlen'));
diccionario.set('Sentir',new Map().set('Frances','Sentir').set('Ingles','Feel').set('Aleman','Dashen'));
diccionario.set('Andar',new Map().set('Frances','Marcher').set('Ingles','Walk').set('Aleman','Naigam'));
diccionario.set('Volar',new Map().set('Frances','Voler').set('Ingles','Fly').set('Aleman','Darbusk'));


for (var [palabra,traducciones] of diccionario) {
    document.write(`La palabra ${palabra} tiene las siguientes traducciones: <br>`);

    for (var [idioma,traduccion] of traducciones) {
        document.write(`\nEn ${idioma} la traduccion es -> ${traduccion}<br>`);
    }
}