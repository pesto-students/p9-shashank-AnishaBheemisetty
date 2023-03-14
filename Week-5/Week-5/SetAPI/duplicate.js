const arr1 = ['hello','goodbye','hey'] 
const arr2 = ['hello','goodbye','hello'] 
const arr3 = [1,5,-1,4]


const hasDuplicates = (arr) => arr.length !== new Set(arr).size;
console.log(hasDuplicates(arr1)) //return false because no duplicates exist
console.log(hasDuplicates(arr2)) //return true because duplicates exist
console.log(hasDuplicates(arr3)) // return true because duplicates exist