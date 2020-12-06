// • Promises podem gerar apenas um único valor
// • O 'then' pode ser usado várias vezes para encadear funções e seus resultados
let p = new Promise((resolve, reject) => {
    resolve([ 'Ana', 'Bia', 'Carlos', 'Daniel' ]);
});

p.then(valor => valor[0])
 .then(primeiro => primeiro[0])
 .then(letra => letra.toLowerCase())
 .then(letraMinuscula => console.log(letraMinuscula))
