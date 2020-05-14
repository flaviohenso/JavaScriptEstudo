for (const letra of 'object') {
    console.log(letra)
}

const assuntosEcma = [ 'Map','Set','Promise']

for (const i in assuntosEcma) {
    console.log(i)
}

for (const assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = [
    [ 'Map', {abordado: true}],
    [ 'Set', { abordado: true}],
    [ 'promise', { abordado: false}]
] 

for (const assunto of assuntosMap.keys()) {
    console.log(assunto)
}

for (const assunto of assuntosMap.values()) {
    console.log(assunto)
}

for (const assunto of assuntosMap.entries()) {
    console.log(assunto)
}

for (const [ch,vl] of assuntosMap) {
    console.log(ch,vl)
}

const s = new Set([ 'a','b', 'c'])

for (const letra of s) {
    console.log(letra)
}