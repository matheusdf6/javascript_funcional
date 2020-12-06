// Arrow function
const bomDia = () => console.log('Bom dia');
bomDia();

// Quando há só uma linha de execução, o return é implícito
const saudacao = nome => `Fala ${nome}, blz?!?`;
console.log( saudacao('Matheus') );

// A arrow function pode ter corpo, mas daí o return deve ser explícito
// Operador ... (rest) => junta todos os parametros em um array
const somar = (...numeros) => {
    let total = 0;
    for( let n of numeros ) {
        total += n;
    }
    return total;
}
console.log( somar(1,2,3,4) );

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1]);
} 

// O 'this' não é acessível quando se usa Arrow function
Array.prototype.primeiro = () => {
    console.log(this[0]);
} 

const numeros = [1,2,3];
numeros.ultimo(); 
numeros.primeiro(); // undefined