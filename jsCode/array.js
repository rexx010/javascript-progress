let result = []
result.push("Ade")
// console.log(result)
result.push(1) 
// console.log(result)
result.push(1==1)
result.push(true)
// console.log(result)
result.push({name: "Ade"})
// console.log(result)



// let item_pop = result.pop()
// console.log("This item is the item popped "+item_pop)
// console.log(result)
// let second_item_pop = result.pop()
// console.log("This item is the second item popped "+second_item_pop)
console.log(result)

let item_shift = result.shift()
console.log("This item is the item shifted "+item_shift)
console.log(result)

let unshift_item = result.unshift("Biro");
console.log("This item is the item unshifted "+unshift_item)
console.log(result)


let new_array = ["ade", "fish", false, 25];
let join_array = result.concat(new_array);
console.log(join_array)