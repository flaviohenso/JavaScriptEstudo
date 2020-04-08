// Closure é o escopo qunado a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas á função

// contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
}

console.log(fora())