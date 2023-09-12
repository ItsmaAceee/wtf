/* functions */
// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);              //console.log isn't a return value
// }
// addTwoNumbers(5,3)
// let result=addTwoNumbers(6,7) // The function addTwoNumbers isn't returning anything so result is only referencing to the function and not storing the sum
// console.log(result) 


 


// function addTwoNumbers(num1, num2){
//    return num1+num2;
//   console.log("THis will never be executed")    //anything after return will not be executed
// }

// let result=addTwoNumbers(6,7)
// console.log(result) 




function displayMsg(name){
    if(!name){                                // undefined is considered false so we can't use it coz it will never execute the if statement so we use !name
        console.log("you can't leave it empty")
        return                             // to terminate the
    }
    
    return `welcome ${name}`
}
displayMsg("Mahesh Majhi")                //this does nothing because the function returns a value and we aren't capturing/storing it anywhere
console.log(displayMsg("Mahesh Majhi"))


