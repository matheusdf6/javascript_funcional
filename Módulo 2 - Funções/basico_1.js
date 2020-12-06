// Function declaration
function bomDia(){
    console.log("Bom dia");
}
bomDia();

// Function expression -> armazena em uma variável
const boaTarde = function() {
    console.log("Boa tarde");
}

boaTarde();
let x = boaTarde(); // undefined
console.log(x);

function somar(a, b) {
    return a + b;
}

let resultado = somar( 3, 4 );
console.log(resultado);
resultado = somar( 3, 4, 5, 6 ); // Podem ser passados mais parametros, mas o Js ignora
console.log(resultado);
resultado = somar( 3 ); // O segundo parâmetro ira como 'undefined', logo o resultado será NaN
console.log(resultado); 