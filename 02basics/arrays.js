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









/*                                           unshift()
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, elementN)

The unshift() method of Array instances adds the specified elements to the beginning of an array
and returns the new length of the array. */

const meroArray7 =[2,3,5,6]
meroArray7Length= meroArray7.unshift(0,1)
console.log(` meroArray7 after "meroArray7.unshift(0,1)" gives us ${meroArray7} of length ${meroArray7Length}`)






/*                                      includes()
includes(searchElement)
includes(searchElement, fromIndex)

The includes() method of Array instances determines whether an array includes a certain value among its entries,
returning true or false as appropriate. */
const num = 8
//console.log(`${meroArray7.includes(num)? "Yes, it contains ${num}": "No, it doesn't contain ${num}"}`) 
// you should not enclose the inner expression in ${} because it will be treated as a literal string.
console.log(`${meroArray7.includes(num)? "Yes, it contains " + num : "No, it doesn't contain " + num}`)     








/*                                           indexOf()
 */
console.log(meroArray7)
console.log(`the index of 5 is ${meroArray7.indexOf(5)}`)








/*                                              join()
join()
join(separator)

        The join() method of Array instances creates and returns a new string by concatenating all of the elements in 
        this array, separated by commas or a specified separator string. If the array has only one item, then that item 
        will be returned without using the separator. */

   console.log(`meroArray7.join( ) = ${meroArray7.join()}`)   
   console.log(`meroArray7.join(' ') = ${meroArray7.join(' ')}`)
   console.log(`meroArray7.join('-') = ${meroArray7.join('-')}`)







/*                                               slice and splice
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)                         item1=> item to be inserted
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,  itemN)

*/
const meroArray8 = [1, 2, 3, 4, 5, 6, 7, 8]
const newArray1 = meroArray8.slice(1, 4)
console.log(`original array = ${meroArray8} and newArray1=  ${newArray1}`)

const newArray2 = meroArray8.splice(1, 4)       // removes items from index [1 4] of orig. array 
console.log(`original array = ${meroArray8} and newArray1=  ${newArray2}`)    

// conclusion: Splice manipulates original array but slice doesn't








/*                                    checking if an object is an Array 
Array.isArray()
*/
const sabkoArray=[2,3,'mahesh','21']
console.log(`${Array.isArray(sabkoArray)? "Yes, it is an array": "No, it is not an array"}`)








/* Problem: how to merge two arrays ?? */
/* using concat() */
const sabkoArray1 = ["Mahesh", "Subodh", "Ramesh", "Ravish"]
const sabkoArray2 = [1, 2, 3, 4, 5]
// const concatenatedArr = sabkoArray1.concat(sabkoArray2)
// console.log(concatenatedArr)

// /* using push() */
// sabkoArray2.push(sabkoArray1)
// console.log(`The result of .push() to merge two arrays is : ${sabkoArray2}`)



/* Recommended way: using spread operator */
const bestWay= [...sabkoArray1, ...sabkoArray2]
console.log(bestWay)








/*************************************************************************************************************
 Destructive methods:
                      one that changes the original array when they run. the elements are destroyed and remade
                      eg: sort, reverse and splice
Non-destructive methods:
                      one that gives a new version of the array. the original is not touched or destroyed but 
                      you are given a new array based on original array. i.e map, slice and filter

***************************************************************************************************************/

  