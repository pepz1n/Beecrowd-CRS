const pegarValores = (valor) => valor.split(" ").map(a=> a)

let [dia,diaInicio] = pegarValores(lines.shift())

let dia1Hora = pegarValores(lines.shift())

let [dia2,diaInicio2] = pegarValores(lines.shift())

let dia2Hora = pegarValores(lines.shift())

let data1 = 24*Number(diaInicio)
data1+= Number(dia1Hora[0])
data1*=60
data1+=Number(dia1Hora[2])
data1*=60
data1+=Number(dia1Hora[4])

let data2 = 24*Number(diaInicio2)
data2+= Number(dia2Hora[0])
data2*=60
data2+=Number(dia2Hora[2])
data2*=60
data2+=Number(dia2Hora[4])

let dataTotal = data2-data1

let segundo = dataTotal % 60
let min = Math.floor(dataTotal/60)
let hora = Math.floor(min/60)
min = min % 60
let dias = Math.floor(hora/24)
hora = hora % 24

 

console.log(`${dias} dia(s)`)
console.log(`${hora} hora(s)`)
console.log(`${min} minuto(s)`)
console.log(`${segundo} segundo(s)`)