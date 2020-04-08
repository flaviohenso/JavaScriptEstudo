function apresnetaErro(mensagem) {
    this.mensagem = mensagem
    this.nome = 'kitandaException'
}

function kitanda(entrada) {

    switch (entrada) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            throw new apresnetaErro('Essa fruta esta em falta')
    }

}
try {
    console.log(kitanda('maçã'))    
} catch (error) {
    console.log(error)
}
