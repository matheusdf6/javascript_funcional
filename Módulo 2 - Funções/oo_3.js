function Produto(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this._desc = desc;

    this.precoFinal = function() {
        return this.preco * (1 - this._desc);
    }
    
}

// Por definir no 'prototype', terá em todas as instancias de um objeto
Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

// Por meio dessa função, é configurado um 'getter' e um 'setter' para uma 
// das propriedades
Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    },
    set: function(novoDesc) {
        if( novoDesc >= 0 && novoDesc <= 1 ) {
            this._desc = novoDesc
        }
    }
});

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}%`
    },
});

const p1 = new Produto('Caneta', 8.59);
p1.log();
console.log( p1.desc );
p1.desc = 0.99
console.log( p1.desc );
console.log( p1.descString );