/* 'this' references the object that is executing the current function
if a function is a part of an object we call it method so if we use this in method it references the object
if a function is not a part of an object i.e a regular function, this references the global object (which is the window object 
in the browser and global in node) */


/* everything in js is an object. even functions in js are called first class objects. a function func(){} can be called
as window.func() */

var name= "Mukesh"         // same as window.name
function example(){
    let name = "Asmit Maharjan";
    console.log( this.name)
}

example();    // same as window.example()  so this is being called upon the window context
/* In browser the ouput is Mukesh because 'this' refers to the window object in browser.so the line console.log( this.name)
is same as console.log(window.name) 
but this will output undefined in node.js */


meroObj={
    name: "Mahesh Majhi",
    someFunc(){
        console.log(this.name)
    }
}
meroObj.someFunc()
/* 'this' in this case refer to the parent object meroObj  */



nestedObj={
    name: "ankit sharma",
    childObj: {
        name: "rankit sharma",
        insideFunction(){
            console.log(this.name)
        }
    }
}
nestedObj.childObj.insideFunction()
/* here, 'this' is used in insideFunction() whose parent it childObj, therefore the output is rankit sharma */




function lastfunc()
{
    console.log(this)
}
lastfunc()