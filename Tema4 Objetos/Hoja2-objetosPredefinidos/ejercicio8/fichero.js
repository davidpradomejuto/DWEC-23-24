
let numero = 45.726;
document.write(`<p>El numero es ${numero}</p>`)
document.write(`<p>Redondeo nautral ${Math.round(numero)}</p>`);


document.write(`<p>Redondeo superior ${Math.ceil(numero)}</p>`);


document.write(`<p>Truncado ${Math.trunc(numero)}</p>`);

document.write(`<p>Redondeo con precision ${Number.parseFloat(numero).toFixed(2)}</p>`);

document.write(`<p>valor absoluto ${Math.abs(-123)}</p>`);