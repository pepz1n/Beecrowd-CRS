let n = Number(lines.shift());

let c = n;
let cont = 1
while(c - cont > 0){
    n = n * (c - cont)
    cont++;
}
console.log(n)