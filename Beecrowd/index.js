var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());
let delta= 0;
let totalPosi = 0;
let totalNeg = 0;
raiz = 0;

delta = (b*b)-(4*a*c); 

if (delta < 0) {
    console.log("Impossivel calcular"); 


}else{

    raiz = Math.sqrt(delta);

    totalPosi = (-b + raiz)/(2*a);
    totalNeg = (-b - raiz)/(2*a);
    console.log(`R1 = ${totalPosi.toFixed(5)}`);
    console.log(`R2 = ${totalNeg.toFixed(5)}`);


}