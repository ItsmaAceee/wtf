/* for in 


The for...in statement is used to loop through the properties of an object. note that in js numeric indices are considered
as properties. so an array would have Numeric indices, length and custom properties if any as its enumerable properties.
It is particularly useful when dealing with objects that are not arrays, such as plain JavaScript objects
(i.e., objects created using object literals or the Object constructor)



syntax:
  for (variable in object)
  statement

parameters:
   variable:
         Receives a string property name on each iteration. May be either a declaration with const, let, or var.
      
   Object:
         array, object or string
 */



/* array indexs as properties

we access properties of an object by
 . notation i.e object.propertyName and
 [] notation i.e object.[propertyName]       similarly we have arrays[indexs]   so indexs are properties too*/




arr1=[1,4,3,2]
arr1.name="Mahesh"    // a custom property you've added to the array. note that the contents of the array are still the same.
console.log(arr1.length)  // still 4

console.log()
for(let index in arr1)
{
    console.log(`key: ${index} and value: ${arr1[index]}`)
}
console.log()
/* The loop will iterate over all enumerable properties of the object itself (even the custom property) and 
those the object inherits from its prototype chain  */




const meroString = "Mahesh Majhi"
meroString.newproperty=5              // strings are primitive(i.e numbers, strings, booleans...) so don't allow custom properties
for(let index in meroString){
console.log(`key: ${index} and value: ${meroString[index]}`)
}