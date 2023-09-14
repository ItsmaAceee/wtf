// function calculatePrice(num1)
// {
//   return num1;
// }

// console.log(calculatePrice(3));







/* Use of rest parameters when the number of parameters is variable/not fixed
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions(one which accepts a variable no. of arguements) in JavaScript.
Syntax:
function f(a, b, ...theArgs) {                    / causes all remaining (user supplied) parameters to be placed within an Array object 'theArgs'

}
*/


/* NOte:
A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the 
function definition. 
eg: 
function wrong1(...one, ...wrong) {}                   //Invalid
function wrong2(...wrong, arg2, arg3) {}               //Invalid
*/


// function calculatePaisa(paisa1, paisa2, ...paisa){
//     return `pasia1 = ${paisa1} and paisa2 = ${paisa2}. The remaining paisas are in array ${paisa}`
// }
// console.log(calculatePaisa(100,150,200,400,1000))





/*                                           Passing objects to the function */

/* const meroObj={
    name: "Mahesh Majhi",
    age: 21
}

function meroFunction(anyObject){
    return `name: ${anyObject.name} and age: ${anyObject.age}`
}
console.log(meroFunction(meroObj)) */


// you can also create and pass an object in the argument itself



// function meroFunction(anyObject){
//     return `name: ${anyObject.name} and age: ${anyObject.age}`
// }
// console.log(meroFunction({name: "Mahesh majhi",
//                           age : 21}))






/*                                       Passing an Array to function */

const meroArray = [2,1,0,10,39]
function meroFuntion(anyArray){
    return ` the item at first index: ${anyArray[0]} and the at last index is ${anyArray[anyArray.length-1]}`
}

console.log(meroFuntion(meroArray))


