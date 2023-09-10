//type vannu ra value vannu xuttai kura ho. typeof(variable) is diff. than console.log(variable)
//converting a string to a number i.e "20abc" as a string into number
/* shift alt A */ 
console.log()
let score1="20abc";
console.log(`score1="20abc"`)
console.log(`The type of score1 is ${typeof score1}`)
console.log(`The value of Number(score1) is ${Number(score1) }`)
console.log(`The type of score1(string) converted into Number is ${typeof convertIntoNumber}`)
console.log()

//converting a number into a string i.e 23 as a number into string
let number1=23 
console.log(`number1=23`)
console.log( `The type of 'string(number1)' is ${String(number1)}`)
console.log(`The value of 'string(number1)' is ${String(number1)}`)
console.log()

//converting null into a string or number
let assume= null
console.log(`assume=null`)
console.log(`The type of 'Number(assume)' is ${typeof(Number(assume))}`)
console.log(`The value of 'Number(assume)' is ${Number(assume)}`)
console.log(`The type of 'String(assume)' is ${typeof(String(assume))}`)
console.log()

//converting undefined into a string or number
let assume1=undefined
console.log(`assume1=undefined`)
console.log(`The value of assume1 is ${assume1}`)
console.log(`The type of 'Number(assume1)' is ${typeof(Number(assume1))}`)
console.log(`The value of 'Number(assume1)' is ${Number(assume1)}`)
console.log(`The type of 'String(assume1)' is ${typeof(String(assume1))}`)
console.log(`The type of assume is ${typeof(assume)}`)
console.log()
 
//working with boolean 
let score2= true
console.log(`score2=true`)
console.log(`The value of score2 is ${score2}`)
console.log(`The type of score2 is ${score2}`)
console.log(`The value of 'Number(score2)' is ${Number(score2)}`)
console.log(`The value of 'String(score2)' is ${String(score2)}`)
console.log()

//converting integer 1/0 into type boolean
let loggedin=""                 /* anything inside of " " results in true but "" empty string results in false. 
                                also " " is not an empty string*/           
let temp= Boolean(loggedin)
console.log(`The boolean value of ${loggedin} is ${temp}`)