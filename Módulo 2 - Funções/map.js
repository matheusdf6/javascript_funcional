// map() => Transformação dos dados
// Retorna um array com menos numero de elementos
// Retorna sempre um NOVO array

const nums = [ 1,2,3,4,5 ];
const dobro = n => n * 2;
console.log( nums.map(dobro) );

const nomes = [ 'ana', 'bia', 'gui', 'lia', 'rafa' ];
const primeiraLetra = texto => texto[0];
console.log( nomes.map(primeiraLetra) );

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lápis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.2 },
]

const getNome = item => item.nome;
const getTotal = item => item.qtde * item.preco;

console.log( carrinho.map(getNome) );
console.log( carrinho.map(getTotal) );

// Implementação de um Map
Array.prototype.meuMap = function(fn) {
    const mapped = [];
    for( let i = 0; i < this.length; i++ ) {
        mapped.push( fn( this[i], i, this ) );
    }
    return mapped;
}

console.log( carrinho.meuMap(getNome) );
console.log( carrinho.meuMap(getTotal) );

