// const obj1={
//     name: "Martin"
// }
// console.log(obj1.name)
// const obj2=obj1
// obj2.name= "Mandy"
// console.log(obj1)
// console.log(obj1.name)  //changes the original object

/*****************************************************************************************************************************
In js if we assign one object to another object, the data is not copied but the reference to the data is copied.
when we copy a variable, we copy its data but in object if we copy the reference to original object
*****************************************************************************************************************************/

let var1="ankit"
let var2= var1
var2= 'sobit'
console.log(var1)     // nothing changes in the original variable




/*                               Object.assign()
The Object.assign() static method copies all enumerable own properties (keys: values) from one or more 
source objects to a target object. It returns the modified target object.
syntax:
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, sourceN)

 */

const obj1={
    name: "Martin",
    add: "Baneshwor",
    phone: 9873261273
}
const obj2=Object.assign({},obj1)
obj2.name="Mandy"
console.log(`original object 'obj1.name'=>${obj1.name} and copied object 'obj2.name'=>${obj2.name}`)




//  Alternative

// const obj11= {
//     name: "sobit",
//     age: 21,
//     add: "shankhamool"
// }
// const obj22= {...obj11}
// obj22.name="robin"
// console.log(`obj11.name=>${obj11.name} and obj22.name=>${obj22.name}`)



// note that these both methods only work at the first level hence called shallow copy. The following code demonstrates this
const obj11= {
    name: "sobit",
    age: 21,
    add: "shankhamool",
    ob:{
        district: "kathmandu",
        province: 3
    }
}
const obj22= {...obj11}
obj22.name="robin"
obj22.ob.district="surkhet"  //alters the original object i.e object vitra object xa vani again memory reference copy garxa not the data
console.log(`obj11.ob.district=>${obj11.ob.district} and obj22.ob.district=>${obj22.ob.district}`)



//solution
const obj33= JSON.parse(JSON.stringify(obj11))
obj33.ob.province=1;
console.log(`obj11.ob.province=>${obj11.ob.province} and obj33.ob.province=>${obj33.ob.province}`)