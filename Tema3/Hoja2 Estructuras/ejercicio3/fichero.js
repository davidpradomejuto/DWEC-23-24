var vector = new Array(10);

for (let i = 0; i < vector.length; i++) {
            vector[i] = Math.random() < 1;
}

for (let i = 0; i < vector.length; i++) {
    
    vector[i]  == true ? document.write(` ${i} => ${vector[i]} `) : console.log(vector[i]);

}

 