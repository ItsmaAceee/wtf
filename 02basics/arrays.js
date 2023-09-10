/*                       

                    Introduction

1. Js arrays are resizable and can contain mix of datatypes
2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings 
   as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — 
   and the last element is at the value of the array's length property minus 1.
4. JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript
   objects create shallow copies, rather than deep copies).
   
   Array
   1. constructor
   2. Properties
   3. Methods
   
   
                                          */






/* Creating a new Array */
meroArray0= Array()                              //empty array plus we can specify the length of the array too i.e Array(4)
meroArray1=[1,2,3,4,5,6]                         //recomended way
console.log( `The type of meroArray0 =${typeof meroArray0} and of meroArray1 is ${typeof meroArray1}`)
/* Array() can be called with or without new. Both create a new Array instance. */




/* Assigning values to an Array */
meroArray0.push('element1','element2','element3','element4','element5')
console.log(meroArray0)




/* Creating object to act like an Associative array */
meroArray2={
    "name": "Mahesh Majhi , Shankhamool ktm",
    "age" : "19 years",
    "hobby": "Anything except coding"                   //note: this isn't an array but an Object so no properties of array are available.
}
console.log(meroArray2.name)
console.log(Array.isArray(meroArray2))    //false


                                      /* Properties */
/* length */
console.log(`the length of the meroArray1 is ${meroArray1.length} i.e ${meroArray1}`)



                                    /* Methods */
/*                                  at() */    
console.log(`the item at index 4 of meroArray1 is ${meroArray1.at(4)}`)     //note: the index starts from 0
console.log(meroArray1[4])   // alternative


/*                                 concat()
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, …,  valueN)

The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, 
but instead returns a new array.
*/

const meroArray3=[0,1,2,3]
const meroArray4=[4,5,6,7]
const meroArray5=meroArray3.concat(meroArray4)
console.log(`meroArray3 concatenated to meroArray4 gives us ${meroArray5}`)
                  /* The array will first be populated by the elements in the object on which it is called (in this
                     example we called concat on the object meroArray3 so final array 'meroArray5' will be populated
                     with elements of meroArray3 first then meroArray4). Then, for each argument, its value will be 
                     concatenated into the array — for normal objects or primitives, the argument itself will become 
                     an element of the final array     */



/*                   Nested Array
  */

 const meroArray6=[[[1,7],2],[2,4],[3],[4]]
 console.log(meroArray6[1][1])
 console.log(meroArray6[0][0][1])                  // 7
 console.log(meroArray6[0][0][0])                  //1
 console.log(meroArray6[0][0])               //[1, 7] 






 /*                                        copyWithin() 
copyWithin(target, start)
copyWithin(target, start, end)
*/

