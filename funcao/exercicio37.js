const funcaoAritmetica = (numTermos, a1, razao) => {
    let pa = []
    while (pa.length < numTermos) {
        if (pa.length === 0) {
            pa.push(a1)
        }else{
            pa.push(pa[pa.length - 1] + razao)
        }
    }
    return pa
}

console.log(funcaoAritmetica(10, -3, 3))


const funcaoGeometrica = (numTermos, a1, razao) => {
    let pg = []
    while (pg.length < numTermos) {
        if (pg.length === 0) {
            pg.push(a1)
        }else{
            pg.push(pg[pg.length - 1] * razao)
        }
    }
    return pg
}

console.log(funcaoGeometrica(10,-3,3))