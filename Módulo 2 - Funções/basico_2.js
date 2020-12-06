function bomDia() {
    console.log('Bom dia!');
}

const boaTarde = function() {
    console.log('Boa tarde!');
}

// 1) Passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if( typeof fn === 'function' ) {
        fn();
    }
} 

executarQualquerCoisa(3); // TypeError - 3 não é uma função
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// *) Retornar um função a partir de outra função
A
function potencia(base) {
    return function(expoente) {
        return Math.pow(base, expoente);
    }
}

const potenciaDe2 = potencia(2);
const bits8 = potenciaDe2(8);
console.log(bits8);
console.log(potencia(3)(4));

/**
 * Desafio Aula 3 - Transformar 'potencia' em arrow function
 */

let potenciaArrow = base => exp => Math.pow(base, exp);
console.log( potenciaArrow(3)(4) );