/* stack(primitive),  heap(non-primitive) */
// anything defined inside of heap gives us reference 

let firstVar= "Mahesh Majhi"
let secondVar= firstVar   /* we are not assigning the value "Mahesh Majhi" to secondVar but a copy of it */
secondVar= "mahe"         /* therefore, this will not change the contents of firstVar */
console.log(firstVar)
console.log(secondVar)
console.log()


/* heap memory */
let meroObj = {
    name: "Mahesh Majhi",
    email: "Maheshmajhi@gmail.com",
    'phone number': 9847372673
}

let meroObj2= meroObj //unlike stack, in heap the data is directly referenced not the copy of the data
meroObj2.name="Mahe"  // it overwrites the contents of .name of meroObj because it is referencing the org. data
console.log(meroObj.name)


/* conclusion: In heap changes is done to the original value but in stack changes are done to the copy of original values */