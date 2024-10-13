// global scope and local scope

// let 
// const
// var
// Variables declared outside a block (in a global or function scope) can be accessed inside the block.
// Variables declared inside a block are not accessible outside the block if they are declared with let or const.


// function scope > varaible is is accessible within the function   > fucntions scoped varaible , varaible defined with the function 
// global scope  >   varaible is accessible wherever you call it 
// block scope >  varaible is accesible within the block of the code  

// let and const > can use 
// var and without equals to varaible > are not scoped


// block scope >> code in the block
// // global scope >> code without in the block / open code



// function myFunction() {
//     let functionVar = "I am in function scope"; // Function-scoped
  
//     if (true) {
//       let blockVar = "I am in block scope"; // Block-scoped
//       console.log(functionVar); // Accessible (because functionVar is in the broader function scope)
//       console.log(blockVar); // Accessible (within the same block)
//     }
  
//     console.log(functionVar); // Accessible (function scope)
//     console.log(blockVar); // Error: blockVar is not accessible here (block scope)
//   }
  
//   myFunction();

//   functionVar is declared in the function scope, so it can be accessed anywhere inside the myFunction.
// blockVar is declared inside the block (inside the if statement), so it can only be accessed within the block. When you try to access blockVar outside the if block, you'll get an error because it's block-scoped.

// let a = 13
// if(true){
//   const  a =123
//     b =23
//  console.log(a)
// }

// console.log(a)
 

// if (true){
//   let a = 12
//   const b = 23
//   var c =2322
// }

// // console.log(a)
// // console.log(b)
// console.log(c)
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   nested scope , fucntion inside function


function one(){
  const username = "umer"
  return username

  function two (){
  
    const website = "youtube"  
    console.log(website)
  }

  
}
console.log(one())


// function ceko(){
//   const neaaw = "hello"
  
//   function neww(){
//     console.log(neaaw)
//     const neww = "five"
//   }
//   // console.log(neww)
// neww()
// }
// ceko()
// Curly Braces and Scope:
// Object Curly Braces ({}):

// The curly braces in an object literal, like { username: "umer", age: 21 }, are not related to scope.
// They are simply a way to group key-value pairs and define the structure of an object.
// Objects do not create a scope for variables. The curly braces here are just part of the object syntax, not a scoping mechanism.




