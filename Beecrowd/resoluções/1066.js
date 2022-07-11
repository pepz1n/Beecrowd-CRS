var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let par = 0
let impar = 0
let posi = 0
let neg = 0
for (let i = 0; i <5; i++) {
    let forget = Number(lines.shift());
    
    if(forget%2 === 0  ){
        par++
    }else{
        impar++
    }
    
    if(forget!= 0){
        if(forget>0){
            posi++
        }else{
            neg++
        }
    }
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${posi} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);

