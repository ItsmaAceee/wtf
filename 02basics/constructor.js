/********************************************************************************************************************
 In JavaScript, constructors are special functions that define how objects of a particular type should be created. 
 When you create an object using a constructor, you are essentially using the constructor as a blueprint to instantiate 
 an object with specific properties and methods.


constructor functions are typically named with an initially capital letter to make it clear that the function is intended to 
 be used as a constructor

 constructor functions are typically using the 'new' keyword. using new before calling a function indicates you intend to 
 create a new object using that function as a constructor

 properties and methods are added to the object using 'this'

 constructor functions are used to create instances(objects) of a specific type. you can use 'instanceof' operator to check
 if an object is an instance of a particular constructor function.

 ********************************************************************************************************************/
const User = function(firstName, courseCount){
    this.firstName=firstName
    this.courseCount=courseCount
    this.getcoursecount= function(){
        console.log(`course count is ${courseCount}`)
    }
}

// we call it like user() i.e same as window.user() so 'this' will refer to the window object till here

 const user1= new User("Mahesh",2)  //user1 is the instance of the User object
 console.log(user1) 
 /* When you create an instance of the User object using the new keyword, the this keyword inside the constructor function
  will refer to the newly created object. This is because the new keyword is used to create instances of objects, and 
  within the constructor function, this refers to the instance being created. 
  this.firstname => user1.firstname
  this.*/
  const user2= new User("Nabin",1)
  console.log(user2)