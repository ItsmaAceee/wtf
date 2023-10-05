/***********************************************************************************************************************
 filter method in array returns a new array containing the elements for which the provided callback function returns 
 'true'
 syntax:
     filter(callbackFn)
     filter(callbackFn, thisArg)

 parameters:
    callbackfunction:
                The filter method returns each element of the array to the callback function. The filter method iterates 
                through each element in the array and applies the callback function to each element, passing the element 
                as an argument to the callback function.
                the callback function receives each element of the array as its argument, and it's up to the callback 
                function to determine whether that element should be included in the filtered result by returning true 
                (to include) or false (to exclude).
                imp: filter should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. 
                if the callback function in your code doesn't return true or false explicitly (no return condition), the filtered 
                array ends up containing undefined values for the elements where the callback function didn't log anything

************************************************************************************************************************/

const words = ["arrange", "man", "ultimate", 'cat', 'ox'];

const filtered = words.filter((element, index) => {
  // Include elements with length less than 4 and log element and index
  const condition = element.length < 4;
  
  if (condition) {
    console.log(`element => ${element} & index => ${index}`);
  }
  return condition; // Return true or false based on the condition
});

console.log(filtered);
console.log(typeof(filtered));
