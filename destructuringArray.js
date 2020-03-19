const [a] = [10]
console.log(a)

const [n1,,n3, ,n5,n6 =0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [,[,nota,]] = [[8,5,4],[8,2,4]]
console.log(nota)