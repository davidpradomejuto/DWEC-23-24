var i = 1
var numero = 1;
document.write(`<table border="1 px">`);
while (i <= 10) {
    document.write(`<tr>`);
     for (let x = 1; x <=10; x++) {
        document.write(`<td>${numero}</td>`);
        numero++;
    }
    i++;
    document.write(`</tr>`);
}
document.write(`</table>`);

