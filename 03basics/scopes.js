/* local scope, function scope, lexical scope, global scope */
/* apart from object declaration when { } comes with functions or if_else conditions, it is called a scope */
var c=200     //global scope
/* if(true)
{
    let a= 100;  
    const b=200;                   //block scope
    var c=140; //or just c=140      
}
// console.log(a)   
// console.log(b)
console.log(c)   */       // this is the reason we dont use var coz its scope is not good



/* nested scope and clouser */
/* function meroFunction()
{
    let balance=1000
    console.log("Parent function executed")

    function teroFunction()
    {
        let childBalance=200
        console.log("child functions says the parent function has balance: ",balance)

    }
    teroFunction()
    //console.log(" the child function has balance: ", childBalance)    //the scope of childBalance ended up with the function teroFunction()
}
meroFunction() */





/* nested scope in if else */
/* if(true)
{
    const channelName="underdogTeam"
    if(channelName==="underdogTeam")
    {
        const subscribers=200
        console.log("channel name: "+channelName+" subscriber count: "+ subscribers)
    }
    console.log("the scope of subscribers ended up above", subscribers)
}
console.log("the scope of channelName ended up above as well", channelName)
 */






/*                     mini hoisting */

console.log(addOne(4))
function addOne(num)
{
    return num+1
}





/* use of variable to store a function is often reffered as an expression. it also shows the property of scope called hoisting */
const storeFun = function(num){
    return num+10
}
console.log(typeof storeFun)
console.log(storeFun(5))       //this if moved to above the function will result in error of type cannot access 'storeFun' before initialization