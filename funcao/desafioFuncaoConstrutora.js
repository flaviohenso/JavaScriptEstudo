function Pessoa (nome) {

    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

new Pessoa('Eliane').falar()