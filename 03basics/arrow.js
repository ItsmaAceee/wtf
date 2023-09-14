/* this refers to the current context */
// const meroObj={
//     username: "Mahesh Majhi",
//     age: 21,
//     welcomeMsg: function(){
//  //   console.log(`${username}, Welcome xa hai`)    // error: 'username' property of the 'meroObj' is different than the variable 'username' inside of function 
// //    console.log(`${meroObj.username}, Welcome xa hai`)     //accessing property of an object is different than that of regular variables
//       console.log(`${this.username}, Welcome xa hai`)    // so we use this.username to correctly refer to the object context of which we are accessing the property of 
//       console.log(this)  // same as console.log(meroObj)
// }
// }
// meroObj.welcomeMsg()
// meroObj.username="Sammy"
// meroObj.welcomeMsg()
// console.log(this)  // since there's no context in the global scope it will give an empty { } but in browser it will give an window{ } object
 


// note: you can't use this function inside of a function
// function meroFunction()
// {
// const name = "Mahesh Majhi"
// console.log(this.name)     //error
// console.log(this)
// }
// meroFunction()




/* arrow function         ()=>{} */
const someThing=()=> 
{
const name = "Mahesh Majhi"
console.log(this)     //empty object
}
someThing()

/* implicit return : in a single line, don't need to use the braces and return*/
const stgElse = ()=> 2+3  //()=> { return 2+3}
console.log(stgElse())

//{ } comes with return statement but if you use ( ) you don't need to use return i.e ()=> (2+3)
//so how do we return an object now?
// const objRtn= ()=>{
//       return { name: "mahesh majhi"}
// }
// console.log(objRtn())

const objRtn= ()=> ({ name: "mahesh majhi"})
console.log(objRtn())