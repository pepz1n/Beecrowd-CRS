var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));

for (let i = 1; i <= 100; i++) {
    if (i%2 === 0) console.log(i);
    
}
