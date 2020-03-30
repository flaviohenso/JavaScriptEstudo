const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (const key in nums) {
    if (key == 5) {
        continue        
    }
    console.log(`${key} = ${nums[key]}`)
}

externo: 
for (const key in nums) {
    for (const key1 in nums) {
        if (key == 2 && key1 == 3) break externo
            console.log(`Par = ${key},${key1}`)
    }
}