var input = require('fs').readFileSync('./Beecrowd/dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let a = Number(lines.shift())

for (let i = 0; i < a; i++) {
  let [c, b] = pegarValores(lines.shift());
  c += b;

  switch (c) {
    case 0:
      console.log("PROXYCITY");
      break;
    case 1:
      console.log("P.Y.N.G");
      break;
    case 2:
      console.log("DNSUEY!");
      break;
    case 3:
      console.log("SERVERS");
      break
    case 4:
      console.log("HOST!");
      break;
    case 5:
      console.log("CRIPTONIZE");
      break;
    case 6:
      console.log("OFFLINE DAY");
      break
    case 7:
      console.log("SALT");
      break;
    case 8:
      console.log("ANSWER!");
      break;
    case 9:
      console.log("RAR?");
      break;
    case 10:
      console.log("WIFI ANTENNAS");
      break;
  }
}