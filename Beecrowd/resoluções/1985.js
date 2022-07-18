var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
let quantidade = lines.shift()
let valorFinal = 0

const soma = (produto, quantidade) =>{
   switch (produto) {
      case 1001:
         valorFinal+= 1.5*quantidade      
         break;
      case 1002:
         valorFinal+= 2.5*quantidade
         break
      case 1003:
         valorFinal+= 3.5*quantidade
         break
      case 1004:
         valorFinal+= 4.5*quantidade
         break
      case 1005:
         valorFinal+= 5.5*quantidade
         break      
   
   }
}




for (let i = 0; i < quantidade; i++) {
   let [produto, quantidade] = pegarValores(lines.shift())
   soma(produto, quantidade)
}

console.log(valorFinal.toFixed(2));








