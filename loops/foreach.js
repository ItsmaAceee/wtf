const names =["mahesh","mukesh","manoj","suraj"]
// names.forEach((name)=>console.log(name))   
/* a loop is created to iterate over each element of the array. For each iteration, the forEach method automatically
 passes the current element of the array as an argument to the callback function you provided. */







 /* lets create our own foreach method */

 //function def.
 const meroforeach= (arr,cbf)=>{                  //step2: receives the array and arrowfunction in its parameters
    for (let i=0; i<arr.length; i++)
    {
        const element= arr[i]                     //step3: stores every item of the array in element
        cbf(element)                              //step4: calls the arrow function and passes the element as argument. the arrow function then log outs the element as output
    }
 }

 //function call                 step1: here we are passing the whole arrow func. as second argument
 meroforeach(names, (name)=>{
    console.log(name)
 })





/*********************************************************************************************************************
                          "functions in js, are considered first class citizens"
      A programming language is said to have first-class functions when functions in that language are treated like any
 other variable.
 1. in js we can assign a function to a variable.
 2. we can assign a function as a method
 3. we can pass a function as an argument
 4. function can return function (this is a key concept when it comes to functional programming)
**********************************************************************************************************************/

// function as method in an object
const demohai={
    name:"mukesh",
   metho: function(){
        console.log(this.name)
    }
}
demohai.metho()


// function as function in an object
const demonai={
    name:"lukesh",
    function(){
        console.log(this.name)
    }
}
demonai.function()

const logArrayElements = (element, index ) => {
    console.log(`a[${index}] = ${element}`);
  };
  
  // Notice that index 2 is skipped, since there is no item at that position in the array.
  [2, 5, , 9].forEach(logArrayElements);
  // Logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
  