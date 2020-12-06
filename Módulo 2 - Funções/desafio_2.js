const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
]

// 1. Apenas os elementos frágeis
const isFragil = item => item.fragil;
const itensFrageis = carrinho.filter(isFragil);
console.log(itensFrageis);

// 2. Quantidade e preço, tendo o total
const getTotal = item => item.qtde * item.preco;
const totalGeral = itensFrageis.map(getTotal);
console.log(totalGeral);

// 3. Media dos valores
const media = (acc, el, _, arr) => acc + el / arr.length;
const mediaTotal = totalGeral.reduce( media, 0 );
console.log(mediaTotal);

// TUDO JUNTO
const result = carrinho
    .filter( isFragil )
    .map( getTotal )
    .reduce( media, 0 );

console.log(result);

/**
 * DEU TUDO CERTO!!
 * Abordagem do Professor
 */

const mediaNova = (acc, el) => {
    const novaQtde = acc.qtde + 1;
    const novoTotal = acc.total + el;

    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    };
}

const result2 = carrinho
    .filter( isFragil )
    .map( getTotal )
    .reduce( mediaNova, { qtde: 0, total: 0, media: 0} )
    .media;

console.log(result2);