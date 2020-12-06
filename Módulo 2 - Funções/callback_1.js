const exec = (fn, a, b) => fn(a, b);

const somarNoTerminal = (x,y) => console.log(x + y);
const subtrairNoTerminal = (x,y) => console.log(x - y);
const subtrair = (x,y) => x - y;

// Calback => Execução de uma função que é chamada como parâmetro
exec( somarNoTerminal, 56, 38);
exec( subtrairNoTerminal, 182, 27);

const r = exec( subtrair, 50, 25);
console.log(r);

// Normalmente os callbacks reagem a algum evento, como no caso, um temporizador
const cb = () => console.log('Exec...');
setInterval(cb, 1000);