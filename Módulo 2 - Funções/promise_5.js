function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if( Math.random() < chanceErro ) {
            reject('Ocorreu um error!');
        } else {
            resolve(valor);
        }
    })
}

// O método 'catch' trata o erro da promise, e pode ser encadeado em 
// outros 'then', porem este não receberá mais dados. O problema pode 
// acontecer dentro da função chamada ou dentro de um dos métodos do 
// 'then'
funcionarOuNao('testando', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.error(`Erro: ${err}`))
    .then(() => console.log('Fim!'))


// O erro pode ser tratado dentro do 'then', e dessa forma ele não cairá
// dentro do 'catch', porque já foi tratado
funcionarOuNao('testando', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.error(`Erro: ${err}`))
    .then(() => console.log('Fim!'))