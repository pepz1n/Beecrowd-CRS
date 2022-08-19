const pegarValores = (line) => line.split(" ").map(a => Number(a))

let a = Number(lines.shift())
let contador = 0
let i;
for(i = 0; i < a; i++){
    let [pa, pb, g1, g2] = pegarValores(lines.shift());
    while(Math.floor(pa) <= pb){
     pa += pa*(g1/100)
     pa = Math.floor(pa)
     pb = Math.floor(pb)
     pb += pb*(g2/100)
     contador++
      if(contador > 100){
          break;
      }
    }
    if(contador > 100){
    console.log("Mais de 1 seculo.")
    }else{
    console.log(`${contador} anos.`)
    }
    contador = 0;
}
