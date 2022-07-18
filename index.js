var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

   //const pegarValores = (line) => line.split(" ").map(a => Number(a));


while(true){   
   let forget = lines.shift() 
   if(forget == 0) return;
   let a = [];

   for (let i = 1; i <= forget; i++) {
      a.push(i)
      
   }

   let string = a.toString()
   string = string.replace(/,/g, " ")

   console.log(string);
}