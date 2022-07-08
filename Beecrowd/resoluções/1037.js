var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let a = lines.shift()


if (a>=0){
    if (a<=25){
        console.log("Intervalo [0,25]");
    }else if (a<=50){
        console.log("Intervalo (25,50]");
    }else if (a<=100){
        console.log("Intervalo (75,100]");
    }else{
        console.log("Fora de intervalo");
    }

}else{
    console.log("Fora de intervalo");
}
