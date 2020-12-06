// filter() => Faz uma filtragem, retornando apenas os elementos de uma array que 
// são válidos para uma determinada condição

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lápis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.2 },
]

const getNome = item => item.nome;
const qtdeMaiorQueZero = item => item.qtde > 0;

const nomeItensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome);
console.log( nomeItensValidos );

Array.prototype.meuFilter = function(fn) {
    const result = [];
    for( let i = 0; i < this.length; i++ ) {
        if( fn( this[i], i, this ) ) 
            result.push( this[i] );
    }
    return result;
}

const nomeItensValidos2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome);

console.log( nomeItensValidos2 );
