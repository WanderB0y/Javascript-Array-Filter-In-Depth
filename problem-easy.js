const nums = [10, 20, 30, 40, 50].map((num) => { return num * 2; }).filter((over50)=> { if (over50 > 50){ return true } return false }).reduce((count, index) => { return count + index})

console.log(nums)

const numss = [10, 20, 30, 40, 50]

console.log(numss);

const num = numss.map((nums) => {
    return nums * 2;
})

console.log(num);

const over50 = num.filter((over) => {
    if (over > 50){
        return true
    }
    return false
})
console.log(over50);