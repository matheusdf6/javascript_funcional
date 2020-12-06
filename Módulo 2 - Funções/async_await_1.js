function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...'))

// Quando marcar um função 'async', você pode user a palavra 'await' para
// esperar a promise ser resolvida sem que seja usado o 'then', podendo 
// inclusive retornar o valor
async function executar() {
    await esperarPor(1500);
    console.log('Async/Await 1...');

    await esperarPor(1500);
    console.log('Async/Await 2...');

    await esperarPor(1500);
    console.log('Async/Await 3...');
}
executar();

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 2000);
    })
}

async function executar2() {
    let valor = await retornarValor();
    console.log(`Async Await 4: ${valor}`);
}
executar2();

// O node não permite chamar 'await' no fluxo principal