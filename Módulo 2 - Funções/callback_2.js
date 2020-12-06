const fs = require('fs');
const path = require('path');


const caminho = path.join(__dirname, 'dados.txt');
// O _ é uma convenção para mostrar que não vai usar o primeiro parametro
const exibirConteudo = (_, conteudo) => console.log( conteudo.toString() );

/**
 * O código assincrono não bloqueia a continuação do fluxo normal, apenas rodando
 * o callback assim que terminado, ideal para execuções longa como leitura de arquivos
 * grandes ou requisições HTTP. Já o código síncrono não possui um callback, ele
 * bloqueia a execução do código e já retorna os dados. 
 */ 
console.log('Inicio Async');
fs.readFile(caminho, exibirConteudo );
console.log('Fim Async');

console.log('Inicio Sync');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync');

