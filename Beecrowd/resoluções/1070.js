var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

    //const pegarValores = (line) => line.split(" ").map(a => Number(a));
    let valor = Number(lines.shift())
    let impar = 0

    for (let i = valor; impar < 6; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            impar++
        }
        
        
    }