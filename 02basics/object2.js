// const omegleUser = new Object()
// omegleUser.Id= "user1"
// omegleUser.name="Sammy Anderson"
// omegleUser.loggedIn=true
// omegleUser.gender="female"
// console.log(omegleUser)

/* Object inside of an object */
// const hamroUser = {
//     email: "Mahesh@gmali.com",
//     fullName: {
//         name: "Mahesh",
//         lastName: "Majhi",
//         nickName: "Maitu"
//     }
// }
// console.log(hamroUser.fullName.name);



/*                               Object.assign()
The Object.assign() static method copies all enumerable own properties (keys: values) from one or more 
source objects to a target object. It returns the modified target object.
syntax:
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, sourceN)

 */

// obj={ 1: "a ",
//       2: "b",
//       3: "c"}
// obj1={4: "d",
//       5: "e",
//       6: "f"}
// newObj1=Object.assign({}, obj, obj1)       //target => new empty object later assigned to newObj1 and it does not modify obj or obj1 coz the target is an empty object{}
// Object.assign(obj,obj1)           //target => obj and newObj2 later and it modifies obj (the target)

// console.log(newObj1)

// console.log(obj)                            //obj now has the concatenated output

// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// console.log(Object.values(obj))
// console.log(obj.hasOwnProperty(3))




/* destructuring object  i.e assigning the propetry of object to individual variables*/

const meroObj ={
    "User-name": "Mahesh Majhi",
    program: "JavaScript",
    fee: "free",
    source: "Chai aur code"
}
let {"User-name": name, program:margorp, fee: eef, source: ecruos}=meroObj
console.log(name);
console.log(margorp);


