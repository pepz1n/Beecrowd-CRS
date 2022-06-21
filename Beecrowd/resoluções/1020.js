var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');


//const pegarValores = (line) => line.split(" ").map(a => Number(a));

let  dias = Number(lines.shift());


let anos;
let meses; 

if(dias>29){
    meses= Math.trunc(dias/30);
    if(meses>11){
        anos= Math.trunc(meses/12);
        meses= meses%30;
        dias = dias%365;
        console.log(`${anos} ano(s)`)
        console.log(`${meses} mes(s)`)
        console.log(`${dias} dia(s)`)
    }else{
        dias = dias %365
        console.log(`${anos} ano(s)`)
        console.log(`${meses} mes(s)`)
        console.log(`${dias} dia(s)`)
    }
}else{
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(s)`)
    console.log(`${dias} dia(s)`)
}






