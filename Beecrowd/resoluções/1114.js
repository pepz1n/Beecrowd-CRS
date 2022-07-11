var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

    //const pegarValores = (line) => line.split(" ").map(a => Number(a));
while (true) {
    let senhaAtual = Number(lines.shift())
    let senha= 2002;
    if(senhaAtual == senha){
        console.log("Acesso Permitido");
        return
    }else{
        console.log("Senha Invalida");
    }
}