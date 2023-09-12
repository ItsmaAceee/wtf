// // object literal
// const user={
//     name: "Mahesh",
//     "Full Name": "Mahesh Majhi",
//     age: 21,
//     address: "Shankhamool Kathmandu",
//     isLoggedIn: false,
//     subjects: ['Php','javascript', 'Html/Css','OS']

// }
// console.log(user.name)
// console.log(user["Full Name"])


//add type symbol as a key to the object
const meroSym =Symbol("symb1")
const user={
    name: "Mahesh",
    "Full Name": "Mahesh Majhi",
    age: 21,
    [meroSym]: "Demo",
    address: "Shankhamool Kathmandu",
    isLoggedIn: false,
    subjects: ['Php','javascript', 'Html/Css','OS']

}

// console.log(typeof meroSym)
// console.log(user[meroSym])

//adding new variables to an existing object
user.greetings="Hello"
console.log(user)
//assigning function to the objects key's value
user.namaskar= function(){ console.log(`${this.name} Namaskar hajur!!`)}
console.log(user.namaskar) //reference to the function namaskar
console.log(user.namaskar()) //call to the function namaskar



