function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(4.5,5.7))
console.log(area())
console.log(area(2,3,4,5,7,0))
console.log(area(4))