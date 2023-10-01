/* 'this' references the object that is executing the current function
if a function is a part of an object we call it method so if we use this in method it references the object
if a function is not a part of an object i.e a regular function, this references the global object (which is the window object 
in the browser and global in node) */
let name="Ankit Sharma"
someFunction= function()
{
    let name= "Mahesh Majhi";
    console.log(this.name)          
}
global.someFunction()
console.log(`the global variable name has the value ${global.name}`)