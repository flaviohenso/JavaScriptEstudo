//coleçao dinamica de pares chave / valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'flavio',
        idade: '56',
        endereco: {
            logradouro: 'rua dias davila',
            numero: 2912
        }
    },
    condutores: [{
        nome: 'flavio',
        idade: 33
    }, {
        nome: 'andreia',
        idade: 35
    }],
    calcularValoreSeguro: () => {
        // ...
    }
}

// notacao de acesso
console.log(carro)
console.log(carro.condutores[1])
console.log(carro.proprietario.endereco.logradouro)
carro.proprietario.numero = 1229
console.log(carro.proprietario.endereco.numero)
console.log(carro['valor'])
console.log(carro['proprietario'].endereco.numero)
console.log(carro['condutores'][0])
carro['condutores'][0].idade = 34
console.log(carro['condutores'][0].idade)
console.log(carro['proprietario']['endereco']['logradouro'])

delete carro.proprietario.endereco
delete carro.condutores

console.log(carro)

//observacao
console.log(carro.condutores) //undefined
console.log(carro.condutores.length)