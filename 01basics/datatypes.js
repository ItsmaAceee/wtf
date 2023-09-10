/* There are basically 2 types of datatypes: Primitive and Non-primitive ( call by value and call by reference) 
the categorization is based on how the data is stored and retrieved*/
/* Primitive(call by value) : string, number, boolean, null, undefined, symbol, BigInt  */
/* Non-primitive(call by reference) : Array, function, object */



/* Why js is a dynamically typed language?
Ans: since the datatype of variable is determined at runtime and not during compile time */
let z = "hello"     //string
let x = 10          //number  
let y = false       //boolean 
let a               //undefined    
let b= null     



console.table([typeof x, typeof y, typeof z])

/* console.table prints the output in index => values pair in default
since it takes argument in form of an array, it will output in form of index value pair */



console.table([{Name:"x", Type: typeof x},{Name:"y", Type: typeof y}, {Name: "z", Type: typeof z}])

/* { } gives more structure to our output. so the input is now an array of object where each object i.e { } represents a row of data in the table.
{key1: value1, key2: value2 },
{key1: value1, key2: value2 },
{key1: value1, key2: value2 }   represents 3 rows of data. where keys-value represents the column of the table*/



/*what happens if you write different column name in 3 different rows?
ans: you get 3 different columns headings for the supposedly same column heading*/
console.table([{Name:"x", Type: typeof x, value: x},{Name:"y", Type: typeof y, valuee: y}, {Name: "z", Type: typeof z, values:z}])



/*so the colmn name i.e key_name should be kept the same */
console.table([{Name:"x", Type: typeof x, value: x},{Name:"y", Type: typeof y, value: y}, {Name: "z", Type: typeof z, value:z}])


/* symbols */
let somethingIg = Symbol('123');
let somethingUg = Symbol('123')
console.log(somethingIg)
console.table([{Variable: "somethingIg", Value: somethingIg, 'somethingIg=somethingUg': somethingIg==somethingUg}, {Variable: "somethingUg", Value: somethingUg}])
console.log()


/* bigint */
let hugeNo =1233435464656n
console.log(typeof hugeNo)
console.log()



/* objects */
let meroObj={
    name:"mahesh" ,
    age: 21, 
    address: "shankhamool"
}
console.log(meroObj)
console.log()
/* Remember { } represent an object. The key value should be seperated by : not = 
and always remeber to use , for next attribute */



/* functions */
/* functions in javascript can be treated as a variable too */
let meroFunc= function(){
    console.log("Keep learning it thoroughly")
    console.log()
}
meroFunc()



/* dataTypes of above used variables */
console.table([{Variable:  'meroFunc', Value: meroFunc, dataType: typeof meroFunc},
{Variable: 'meroObj', Value: meroObj, dataType: typeof meroObj},
{Variable: 'somethingIg', Value: somethingIg, dataType: typeof somethingIg},
{Variable: 'hugeNo', Value: hugeNo, dataType: typeof hugeNo},
{Variable: 'a', Value: a, dataType: typeof a},
{Variable: 'b', Value: b, dataType: typeof b}
])