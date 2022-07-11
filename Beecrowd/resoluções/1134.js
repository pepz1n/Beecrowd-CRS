var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

    //const pegarValores = (line) => line.split(" ").map(a => Number(a));
let alcool = 0
let gasolina = 0
let diesel = 0

while(true){
    let numero = Number(lines.shift())

    switch (numero) {
        case 1:
            alcool++
            break;
        case 2:
            gasolina++
            break;
        case 3:
            diesel++
            break;
        case 4:
            console.log("MUITO OBRIGADO");
            console.log(`Alcool: ${alcool}`);
            console.log(`Gasolina: ${gasolina}`);
            console.log(`Diesel: ${diesel}`);
            return
    }
}