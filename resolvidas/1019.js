var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let  segundos = Number(lines.shift());
let aux;


let horas;
let minutos; 

if(segundos>59){
    minutos= Math.trunc(segundos/60);
    if(minutos>59){
        horas= Math.trunc(minutos/60);
        minutos= minutos%60;
        segundos = segundos%60;
        console.log(`${horas}:${minutos}:${segundos}`)
    }else{
        segundos = segundos %60
        console.log(`0:${minutos}:${segundos}`)
    }
}else{
    console.log(`0:0:${segundos}`)
}






