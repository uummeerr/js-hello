// global scope and local scope

// let 
// const
// var
// Variables declared outside a block (in a global or function scope) can be accessed inside the block.
// Variables declared inside a block are not accessible outside the block if they are declared with let or const.

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



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   nested scope , fucntion inside function


function hello(){
    const username = "umer"
  

    function hello2(){
        console.log("world")
        const h = "rahim"
    }

    // console.log(h)

    hello2()
}
// hello()


