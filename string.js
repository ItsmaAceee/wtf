/* In js we can create strings in 2 different ways */

/* string literal */
const myString= "hello! world"                        //string primitive 
console.log()
  

/* String are immutable i.e can't directly change the value once declared */
let string1= "hello"
string1[0]= "j"              // js ignores this thus nothing changes in string1
console.log(string1)  


/* string object constructor */
const meroString= new String("wtf is this?")        //use of 'String' constructor
console.log(meroString)
console.log()


