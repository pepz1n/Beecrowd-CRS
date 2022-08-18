var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);

const [qtd, tam] = pegarValores(lines.shift());
const titas = lines.shift().split('');
const [p, m, g] = pegarValores(lines.shift());


let muralhas = pegarValores((tam.toFixed(0) + ' ').repeat(qtd));
let [tp, tm, tg] = [0, 0, 0];

titas.map(tita => {
    if (tita == 'P') {
        while (muralhas[tp] < p)
            tp += 1;
        muralhas[tp] -= p;
    } 
    else if (tita == 'M') {
        while (muralhas[tm] < m)
            tm += 1;
        muralhas[tm] -= m ;
    } else  {
        while (muralhas[tg] < g)
            tg += 1;
        muralhas[tg] -= g;
    }
});
console.log(Math.max(tp, tm, tg)+1);