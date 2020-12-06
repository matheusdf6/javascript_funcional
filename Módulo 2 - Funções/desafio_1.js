// ACERTEI :) 

// somar(3)(4)(5)
function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    }
}
console.log( somar(3)(4)(5) );

// calcular(3)(7)(fn)
function calcular(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b)
        }
    }
}

const soma = function(a,b) {
    return a + b;
}
const subtrai = function(a,b) {
    return a - b;
}
const multiplica = function(a,b) {
    return a * b;
}
const divide = function(a,b) {
    return a / b;
}

console.log( calcular(10)(2)(soma) );
console.log( calcular(10)(2)(subtrai) );
console.log( calcular(10)(2)(multiplica) );
console.log( calcular(10)(2)(divide) );