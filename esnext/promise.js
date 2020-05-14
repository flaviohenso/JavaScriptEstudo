const falarDepois = (segundos, frase) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(frase)
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepois(3,"Demorou mais chamou!")
    .then(frase => frase.concat('!?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log('Erro: sua requisicao nao pode ser tratada'))