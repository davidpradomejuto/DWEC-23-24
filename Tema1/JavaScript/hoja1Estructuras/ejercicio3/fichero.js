
var colores = ['Naranja','Lima','Turquesa','Rosa','Rojo'];
var codigos = ['#F39C12','#C0F312','#12F3E5','#F312AF','#F31212'];


for (const i in colores) {
    document.write(`<p style='color : ${codigos[i]}'>el color ${colores[i]} tiene el codigo ${codigos[i]}</p>`);
}
