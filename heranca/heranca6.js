function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Aula1",458)
const aula2 = new Aula("Aula2",4865)

console.log(aula1,aula2)

function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = new novo(Aula,"aula3",54859)
const aula4 = new novo(Aula,"aula4",556569)

console.log(aula3,aula4)