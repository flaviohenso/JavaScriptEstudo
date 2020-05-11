const fs = require('fs')

const caminho = __dirname + '/arquivos.json'

//sincrona... essa forma não muito recomendada pois trava o fluxo de execução
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona...
fs.readFile(caminho,'utf-8',(error,conteudo) => {
    const config = JSON.parse(conteudo)

    console.log(`${config.db.host} : ${config.db.port}`)

})

const config = require('./arquivos.json')
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})