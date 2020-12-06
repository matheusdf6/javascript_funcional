// Usar promise para encapsular a chamada de um arquivo, de modo que o 'then'
// retorne o conteúdo do arquivo

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const readFileAsync = function(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))
    });
}

readFileAsync(caminho)
    .then(console.log)