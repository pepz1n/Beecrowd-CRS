var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());

a*=3.5;
b*=7.5;
let media=(a+b)/(3.5+7.5);

if(media>10) media=10

console.log(`MEDIA = ${media.toFixed(5)}`);