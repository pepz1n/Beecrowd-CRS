let receitas= 6897.98;
let despesas= 2934.78;
let saldo = receitas - despesas

const idiomas = {
    ingles: {
        unidadeMonetaria: 'US$',
        extenso: 'Dolar AMERICANO',
        decimais: 3
    },

    portugues: {
        unidadeMonetaria: 'R$',
        extenso: 'Real Brasileiro',
        decimais: 2
    }

};

let config = idiomas.ingles

function formatomonetario(moeda, valor, decimais){
    return `${moeda} ${ valor.toFixed(decimais)}`
}

console.log(`Receitas em ${config.extenso}: ${formatomonetario(config.unidadeMonetaria, receitas, config.decimais)}`);