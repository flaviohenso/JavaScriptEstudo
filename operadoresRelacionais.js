console.log('01)','1' == 1)
console.log('02)', '1' ===1)
console.log('03)', 1 ===1)
console.log('04)', '3' != 3)
console.log('05)', '3' !== 3)

console.log('06)', 3 > 3)
console.log('07)', 3 < 4)
console.log('08)', 6 >= 3)
console.log('09)', 3 >= 6)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('10)', d1 ===d2) //compara referencia de memoria
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1 == d2)

console.log('13', undefined == null)
console.log('14)', undefined === null)