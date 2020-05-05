const aprovados = ['flavio','fabio','andreia','joao']

aprovados.forEach(function(nome,indice/*,arr*/){
    console.log(`${indice}: ${nome}`)
    //console.log('array: '+arr)
})

aprovados.forEach(nome => {
    console.log(nome)
})

const exibir = nome => console.log(`${nome}`)


aprovados.forEach(exibir)