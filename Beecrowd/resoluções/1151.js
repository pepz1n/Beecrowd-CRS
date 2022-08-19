let a = Number(lines.shift())

let b = [0]
let aux1 = 1
let cont = 0 

while(b.length < a){
    if(b.length == 1){
        b.push(1)
    }else{
        b.push(b[cont]+ b[cont-1])
    }
    cont++
}
console.log(b.join(' '))