/* ` ` is called template literal and " " or ' ' is called string literal */
/* In js we can create strings in 2 different ways */

/* string literal or Primitive strings */
const myString= "hello! world"                        
console.log()
  

/* String are immutable i.e can't directly change the value once declared */
let string1= "hello"
let string2= "world"
string1[0]= "j"              // js ignores this thus nothing changes in string1
console.log(string1)  
console.log()


/* string Objects using 'string' constructor i.e new String(" ") */

const meroString= new String("what is this?")        


console.log(meroString)
console.log()



/* methods and functions with String object */

/*                                 characterAt
Syntax:
charAt(index) */

charAt2= meroString.charAt(2)       // returns character at index 2 of meroString.
console.log(charAt2) 
console.log()





/*                                  concatination 
Syntax:
concat()
concat(str1)
concat(str1, str2)
concat(str1, str2, …, strN) */

stringConcat=meroString.concat(' Does the concatination thing even works?')
console.log(stringConcat)
console.log(string1.concat(', ', string2))   // hello , world
console.log(string2.concat(', ', string1))   // world, hello




/*                                      endsWith
Syntax:
endsWith(searchString)
endsWith(searchString, endPosition)
*/

checkIfEndsWith=meroString.endsWith("this?")
indexSpecified=meroString.endsWith("what",4)      //4 is The end position at which "what" is expected to be found (the index of substring "what" last character plus 1). Defaults to str.length.
console.log(checkIfEndsWith)
console.log(indexSpecified)
console.log()




 /*                                     includes
Syntax:
includes(searchString)
includes(searchString, position)*/

const checkForWord=meroString.includes("is")
console.log(checkForWord)
const checkForWord1=meroString.includes("what",1)        /*Returns false because The position 1 within the string at which to begin searching for searchString. (Defaults to 0.) */
console.log(checkForWord1)      


/* using template literal and tertiary comparator for better output */
const word="is"
console.log(`The searched word "${word}" ${meroString.includes(word)?'is':'is not'} found in the variable meroString`)

                    /* differences between primitive string and string object */
                    
/*       Sometimes, you want to use methods or access properties on strings, like changing the case of letters or finding 
the length. In JavaScript, these methods and properties are available for string objects, not primitive strings. 

         So, if you try to use a method or property on a primitive string, JavaScript will automatically convert it into 
a temporary string object, do the operation, and then convert it back to a primitive string.*/





