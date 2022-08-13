var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

//const pegarValores = (line) => line.split(" ").map(a => Number(a));
let vertebrado = lines.shift();
let tipo = lines.shift();
let comida = lines.shift();

if(vertebrado == 'vertebrado'){
  if(tipo == 'ave'){
    if(comida == 'carnivoro'){
      console.log("aguia");
    }else{
      console.log("pomba");
    }

  }else{
    if(comida == 'onivoro'){
      console.log("homem");
    }else{
      console.log("vaca");
    }
  }
}else{
  if(tipo == 'inseto'){
    if(comida == 'hematofago'){
      console.log("pulga");
    }else{
      console.log("lagarta");
    }

  }else{
    if(comida == 'hematofago'){
      console.log("sanguessuga");
    }else{
      console.log("minhoca");
    }
  }
}