stringArray = ["alpha", "bravo", "charlie", "delta"]
numberArray = [1, 2, 3, 4]
booleanArray = [true, false, false, true]
stringArray.pop() //removes last element
numberArray.push(5) //adds 5 to the end of the array
booleanArray.shift() //removes first element

console.log(`The first element of the stringArray is ${stringArray[0]}`)
console.log(`The last element of numberArray is ${numberArray[numberArray.length - 1]} `)
