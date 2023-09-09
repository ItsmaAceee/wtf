/* in js there's two way of specifying numbers: using primitive literal or using 'Number' constructor with or
without new */

/* Primitive literal */
let num= 10
console.log( `the value of "num=10" is ${num} and its type is ${typeof num}`)
console.log()



/* Using 'Number' constructor with or without new */

const stgNum1= Number(30)         //this is same as primitive literal. the output is a number      
console.log(`the value of "Number(30)" is ${stgNum1} and its type is ${typeof stgNum1}`)

console.log()

const stgNum=  new Number(30)         //this creates a object number with methods associated with it
console.log( `the value of "new Number(30)" is ${stgNum} and its type is ${typeof stgNum}`)




/* how Js handle functions and properties */

 /*                                   referencing a function/method                               */

const meroNum= new Number(400)
const meroNumm= new Number(Math.PI)
const meroNum2= meroNum.toString         /* meroNum2 becomes a reference to the method 'toString' of the 'Number' object meroNum*/
console.log(`the vaule of "meronuum2" is ${meroNum2}`)
console.log(meroNum2.call(meroNum).length)  /* since meroNum2 is a reference to 'toString' method, it also now expects to be called on a Number Object i.e meroNum . we use call to explicitly specify the context i.e onto which to call the function*/
console.log(meroNum2.call(meroNumm).length)


                     
 /*                                     invoking a function/method     direct calling                                  */
const teroNum= new Number(300)
const teroNum1= teroNum.toString().length 
console.log(`the length of 300 is ${teroNum1}`)


//  so forgetting to put a ( ) after a method makes a huge difference. never forget to put a ( )




/*                                            toFixed                                    */
                                            
const hamroNum= new Number(4332.4688)
console.log(`4332.4688 fixed to 2 is ${hamroNum.toFixed(2)}`)




/*                                            toPrecision                                   */
console.log(`4332.4688 in precision of 2 is ${hamroNum.toPrecision(2)}`)
console.log(`4332.4688 in precision of 4 is ${hamroNum.toPrecision(4)}`)
console.log(`4332.4688 in precision of 5 is ${hamroNum.toPrecision(5)}`)
console.log(`4332.4688 in precision of 6 is ${hamroNum.toPrecision(6)}`)





/*                                            toLocaleString                                   */
let hamroNum1= 100000000
console.log(`100000000 using toLocaleString gives us ${hamroNum1.toLocaleString('en-IN')}`)






/*                                            Math                                            */

console.log(Math.abs(-4.6754))
console.log(Math.round(3.456))
console.log(`Math.floor(3.456) = ${Math.floor(3.456)}`)          //round offs to lower closest value
console.log(`Math.ceil(3.456) = ${Math.ceil(3.456)}`)          //round offs to upper closest value
console.log(Math.sqrt(49))
console.log(Math.min(49,3,14,11,0,34))
console.log(Math.max(49,3,14,11,0,34))
console.log(`Math.random() = ${Math.random()}`);
console.log(`Math.random()*10 = ${Math.random()*10}`)
console.log(`Math.floor(Math.random()*10) = ${Math.floor((Math.random()*10)+1)}`)

/* 
Math.random() gives a value ranged [0  1) i.e between 0 (inclusive)  and 1 (exlcusive). so if we want a range of n different
value, say 10 we will multiply this function with 10 i.e 0.99999(almost 1)*10 => 9.9999(almost 10)
 this means we get the range [0  10) but we want something like [1  10] 
to remove 0 we can add 1 to it 

(Math.random()*10)+1

min. case i.e Math.random() = 0
(0*10)+1 = 1

max. case i.e Math.random() = 1(almost)
(1*10)+1 = 11(almost)

Therefore, the range is [1  11)

    since, we could get stg like 10.234 or 10.999, we use the function Math.floor to round off this to the lower closet number
that is 10                         
                                



Now say we want a range of values like [10 20] i.e (10,....,20) 11 values

we know (Math.random()*11 would give us output from the range [0  11) but we want somthing like [10  20]

so, ((Math.random()*11) + 10) 

min. case i.e Math.random() = 0
(0*11)+10 = 10

max. case i.e Math.random() = 1 (almost)
(1*11)+10 = 21 (almost)

Therefore, the range is [10  21)
To make it 20, we use Math.floor(). So, the range is now [10  20] 
   



conclusion:
            Math.floor(  ( Math.random()* (max - min + 1) )  + min)


          1.  in above case, max-min+1 gave us our desired range i.e 11  
          2.  multiplying with Math.random() gave us [0  11)
          3.  adding the min i.e 10 gave us [10  21)
          4.  using Math.floor gave us [10  20]

*/


