var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let [numero, quantidade] = pegarValores(lines.shift())


switch (numero) {
    case 1:
        console.log(`Total: R$ ${(quantidade*4).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(quantidade*4.5).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(quantidade*5).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(quantidade*2).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(quantidade*1.5).toFixed(2)}`);
        break;
}