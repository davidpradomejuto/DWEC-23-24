var vector = new Array(10);

for (let i = 0; i < vector.length; i++) {
    let j = true;

    while (j) {
        let multiploDe5 = Math.floor(Math.random() * 21) * 5;

        if (i == 0 && multiploDe5 < 50 || i == 9 && multiploDe5 < 50) {
        } else {
            vector[i] = multiploDe5;
            j = false;
        }
    }


}

document.write(vector.toString());
