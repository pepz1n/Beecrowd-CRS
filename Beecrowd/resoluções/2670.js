let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let time = 0
let time2 = 0
let time3 = 0
let time4 = 0
time = b * 2 + c * 4
time2 = a * 2 + c * 2
time3 = a * 4 + b * 2
time4 = a * 2 + c * 2

console.log(Math.min(time, time2, time3, time4))