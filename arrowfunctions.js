
// 2015 > es6  many features

// this  keyword, current context ko refer karna


// const cekoo ={
//     username : "umer",
//     age : 21,
//     welcomemessage : function(){
//         // console.log(`${this.username} , welcome to the website`);
//         console.log(this)
    
//     }

// }

// // ceko.welcomemessage()
// // ceko.username = "rahim"  /*>>>> changing context */
// // ceko.welcomemessage()
// cekoo.welcomemessage()
// console.log(this)

// console.log(this)  >>  prints current context


// Why Can You Call welcomemessage() Like a Function?
// In JavaScript, when an object key holds a function as a value, it’s called a method of the object.
// Since welcomemessage is a function inside the object, you can call it just like any function using parentheses ().
// When you use () after a function name, it tells JavaScript to run the function.
// Without (), you’re just referencing the function, but not executing it.


// const ceko = {
//     name : "umer",
//     class : "12th",
//     school : "isut"
 
// }
// ceko.name = "rahim"

// function seko()
// {
//     console.log(ceko.name)
// }


// ceko.welcomemessage()
// // changing context
// ceko.username = "sec"
// ceko.welcomemessage()

//     1.        //  console.log(this) >> standalone
//             // global object and window
//            // global object >>> {} 
//           // window in browser >>> prints something 

          
 

// 2. // function eko(){
// //     console.log(this)
// // }
// // eko()   >>> prints something when this is  printed in function



   
// 3. // this cannot be used in function that is current context >>> function ceko(){
//      username : "umer"
//      console.log(this.username)
// }
// ceko()    >>>> undefined


// we can store fucntion in varaible 

// const store = function(){
//     console.log(this)
// }
// store()



// // arrow function

// const key = ()=>{
//     console.log(this)
// }
// key()


// basic syntax of writing arrow function is that ()=>{} , we can store this in varaible also 


// there is not only one difference in functions and arrow functions that is only this is used in that and this in not used in arrow functions


// explicit return > when we use return statement
// implicit return  > instead of writing return statement and {} we just make it in one line results in implicit means 
// pehle se hi  mana huva hai return dega

// const ke = (num1,num2) =>  num1 + num2
// console.log(ke(200,300))



// object return

// const cko = (num1 . num2) => ({usernanme : "umerrrahim"})
// console.log(cko(3,4))

// here values in arguments as well as parameters will not make difference ,since function  is refereing to object when i call it,
// it only gives me object as a return


// Since the function returns { username: "umer" }, this object is what is printed when you call console.log(namae(2, 3)).
// The values of a and b are ignored because they are not used anywhere inside the function.


// The parameters a and b are passed into the function, but they don't influence the output because they are not referenced in the function body.





// object in functions

// const namae = function (a,b){
//    return {username : " umer"}

// }
// console.log(namae(2,3))






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++pracitse+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  const keey = ()=>{
//    console.log(this)
//  }
//  keey()


//  function name (){
//    console.log(this)
//  }
//  name()



// const key =(num1 , num2)=> (num1 **num2)
// console.log(key(2,3))




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++iife++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // immediately invoked (to call /run) function expression
// In JavaScript, global scope refers to the context where variables and functions are accessible from anywhere in your code.


// why iife is used

// Name Collisions: If two scripts define a variable with the same name in the global scope, one will overwrite the other, leading to unexpected behaviors.
// Maintenance Challenges: Having too many global variables can make it hard to track where changes occur and what the current state is.



// Explanation:
// Global Variable: globalVariable is accessible from anywhere, including inside the IIFE.
// Local Variable: localVariable is defined inside the IIFE and is not accessible outside it. When you try to access localVariable from the global scope, it results in an error.


// local scope when a varaible is defined locally having 2 types function scope and block scope
// global scope when a varaible is declared globally accessed anywhere , either in a function , block , anywhere






// ()() > syntax of iife
// global scope ke pollution se problem hoti hai that is why we use iife 

(function chia(){
    //named iife
    console.log("db connected")
})();


((name)=> {
    // unnamed iffe
    console.log(`db connnected ${name}`)
})("umer")

// passig parameters in iife

  






