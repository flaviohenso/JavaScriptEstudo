const vetorPilha = [1,2,3,4,5]
const vetorAdiciona = [6,7,8,9,10]

getVetorResultante(vetorAdiciona,(vetorAdd) => {
    vetorAdd.forEach(element => {
        vetorPilha.push(element)    
    });
    return vetorPilha
})

function getVetorResultante(vetorAdiciona,callback){
    return console.log(callback(vetorAdiciona))
}
