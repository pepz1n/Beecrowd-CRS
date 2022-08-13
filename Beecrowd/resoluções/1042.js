var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

  const pegarValores = (line) => line.split(" ").map(a => Number(a));

  let [a, b, c] = pegarValores(lines.shift());

  if(a<b){
    if(a<c){
      if(b<c){
          console.log(a) 
          console.log(b)  
          console.log(c);
      } else { //Else do if da linha 118
            console.log(a) 
            console.log(c)  
            console.log(b);
      }// Fim do else da linha 20
    } else { //Else do if da linha 17 para se a<c
        console.log(c) 
        console.log(a)  
        console.log(b);
    } //Fim do else da linha 23
  } else { //Else do if da linha 16 para se a<b
    if(b<c){
        if(a<c){
            console.log(b) 
            console.log(a)  
            console.log(c);
        } else { // Else do if da linha 28
            console.log(b) 
            console.log(c)  
            console.log(a);
        }//Fim do Else da linha 30
    } else { //Else do if da linha 27     
        if(b<a){
            console.log(c) 
            console.log(b)  
            console.log(a);
        }//Fim do if da linha 34
    }//Fim do else da linha 33
  }//Fim do else da linha 26
  console.log("");

  console.log(a) 
  console.log(b)  
  console.log(c);