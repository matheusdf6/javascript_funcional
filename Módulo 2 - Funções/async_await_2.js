function gerarNumerosEntre(min, max, numerosProibidos) {
    if( min > max ) {
        [ max, min ] = [ min, max ] 
    }

    return new Promise((resolve, reject) => {
        const fator = max - min  + 1;
        const aleatorio = parseInt( Math.random() * fator + min );
        if( numerosProibidos.includes(aleatorio) ) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio);
        }
    });
}

// A forma de resolver um função assinctrona, é por meio do 'return',
// e a forma de tratar o erro é por meio de 'try/catch', e a forma
// de rejeitar é pelo 'throw'
async function gerarMegaSena(qtdNumeros) {
    try {
        const numeros = [];
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push( await gerarNumerosEntre(1,60, numeros) )
        }
        return numeros;    
    } catch(e) {
        throw "Que chato";
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)