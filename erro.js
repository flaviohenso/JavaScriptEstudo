function tratarErro(erro){
    //throw 'erro tratado aqui'
    throw {
        erro: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!')
    } catch (erro) {
        tratarErro(erro)    
    }
    finally {
        console.log('bloco finally sempre executado, independente se ocorre erro ou não')
    }
}

imprimirNomeGritado(
    obj = {nome: 'Flavio'}
)