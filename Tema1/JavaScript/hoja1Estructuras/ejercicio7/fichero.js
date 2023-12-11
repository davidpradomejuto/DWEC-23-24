
var equipos = [
    ['Real Racing club',54,13,5,2,6,7,12],
    ['Barcelona',54,13,5,2,6,7,12],
    ['Madrid',54,13,5,2,6,7,12],
    ['Getafe',54,13,5,2,6,7,12],
    ['Valladolid',54,13,5,2,6,7,12],
    ['Sporting Gijon',54,13,5,2,6,7,12],
    ['Rayo vayecano',54,13,5,2,6,7,12],
    ['Gimnastica',54,13,5,2,6,7,12],
    ['Vimenor',54,13,5,2,6,7,12],
    ['Racing de ferrol',54,13,5,2,6,7,12],
    
];
// 0 => nombre, 1=> puntos,2=> partidos jugados,3=> ganados,4=> empatados,5=> perdidos,6=> goles a favor,7=> en contra
for (i in equipos) {
    var equipoGanador=0;

    if(equipos[i][1]>equipoGanador){
        equipoGanador=i;
    }
}

document.write("<table>");
document.write(`<tr><td>nombre</td><td>${equipos[equipoGanador][0]}</td></tr>`);
document.write(`<tr><td>puntos</td><td>${equipos[equipoGanador][1]}</td></tr>`);
document.write(`<tr><td>jugados</td><td>${equipos[equipoGanador][2]}</td></tr>`);
document.write(`<tr><td>ganados</td><td>${equipos[equipoGanador][3]}</td></tr>`);
document.write(`<tr><td>empatados</td><td>${equipos[equipoGanador][4]}</td></tr>`);
document.write(`<tr><td>perdidos</td><td>${equipos[equipoGanador][5]}</td></tr>`);
document.write(`<tr><td>goles a favor</td><td>${equipos[equipoGanador][6]}</td></tr>`);
document.write(`<tr><td>goles en contra</td><td>${equipos[equipoGanador][7]}</td></tr>`);

document.write("</table>");