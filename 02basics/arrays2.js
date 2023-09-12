/* Traversing an Array containing object */

const meroArr= [
    {name: "mahesh Majhi", roll: 21 },
    {name: "Suraj Shahi", roll: 1 },
    {name: "Abhinav Joshi", roll: 2 },
]
// for(let index in meroArr){
//     console.log(index + "and element is "+ meroArr[index])
// }


/* Using for of loop */
function processElement(element) {
    console.log("Processing element:", element.name);
  }
  
  for (let value of meroArr) {             
    processElement(value);
  }
  /*                                       how it works
  1st iteration:
  value = {name: "Mahesh Majhi", roll: 21}
  calls the function processElement( value i.e {name: "Mahesh Majhi", roll: 21} )
  console.log( value.name )
  
  and the process repeats*/







  /*                                      .forEach
  syntax:
          forEach(callbackFn)
  Parameter:
          
          callbackFn:
                 A function to execute for each element in the array. Its return value is discarded.
                 i.e we generally don't store its returned value.               forEach( ()=>{
                                                                                              console.log()
                                                                                              no returns 
                                                                                              }
                                                                                          )
  
                 It takes the following arguements:
                 element:
                  The current element being processed in the array.
                  index:
                The index of the current element being processed in the array.
   */
console.log()
const meroArr1= ["OM", "Shanti","OMM"]
meroArr1.forEach((element, index) => {
    console.log(element, index)
    
});


/* for in and for of differences:
                for...in provides access to the keys (property names) of an object,
                while for...of provides access to the values themselves. */



              


/*                                destructuring array 
What is destructuring assignment?
Destructuring is a concept of breaking data structure, like array or object literal into data pieces
or in other words individual variables. So, Destructuring assignment is about extracting the data pieces
from array or object literal and assigning them to individual variables*/
// console.log()
// let arr=[4,5,8,19,30]
// let [a,b,c,d,e]=arr
// console.log(a,b,c,d,e)


// /* swapping two numbers using destructuring assignment */
// let num1 =4;
// let num2= 5;
// [num1,num2]=[num2,num1];
// console.log(num1, num2)


 let [a,b,c]=[5, ,7]
 console.log(a,b,c)    //b undefined