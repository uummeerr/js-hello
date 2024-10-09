// // // FUNCTION IS A BLOCK OF CODE ,we can reuse it many times wherever and whenever, reusablility
// // // parameter , block of code , execution(parameter)
// // // function hello (){
// // //     console.log("hello")
// // // }

// // // hello()
// // // // to call the function or execute the function
// // // // hello >> function reference
// // // // ()  >> execution


// // // function twonumbers(number1 , number2){
// // // console.log(number1+number2)
// // // }


// function hello(n,m){
//   console.log(n,m)

// }
// // // hello(1,2)
// function hello(a=1,b=200)
// {
//   console.log(a+b)
// }
// hello(a,b)


function he(a = 23 , b = 32){
  console.log(a+b)
  return he
}
he(20,50)
// Calling by Values: You pass the literal values directly like add(5, 10).
// Calling by Variables: You pass the variables like add(a, b).


// twonumbers(2,3)   /* argument */
// // inputs taken >> parameters

// twonumbers(2,"3")  >> 23 >>> string addition
// twonumbers(2, null)  >> 2 


function hello(n,m){
    console.log(n+m)
}
 let  h = hello(1,2)
//  console.log(he)  /* undefined*/  >>> maine result ko  varaible mai rakha 
 
//  return ke baad jo bhi likhoge vo kaam nahi karege

function hel(n,m){
    let result = n+m
     return result
}

console.log(hel(2,3))
let  res = hel(2,3)
console.log(res)




// // function hell(a,b){   
// //  console.log(a+b)
// // return a+b
// // }

// // let c = hell(1,2)
// // console.log(c)
// // // function numbering(num1,num2){
// // //     return num1+num2
// // // }

// // // // console.log(numbering(1,2))
// // // function numbering(num1, num2) {
// // //     return num1 + num2;
// // // }

// // // function numbering(num1, num2) {
// // //     return num1 + num2;
// // // }

// // // storing in a varaible


// +++++++++++++++++++++++++++++++++++++++++
// if statement 
// we can write username=== undefined in another way >> !username

// we can set default values here if there is need of that , so not to get undefined values
function hello(username){
if(username===undefined){
  console.log(`${username} has signed succesfully`)
  return 
}
return `${username}  just login`
}

console.log(hello())


function hel(usernmae){
  return `${usernmae} just login in `
 }
  console.log(hel("umer"))









// // Return: Functions with return are often designed to compute values that can be reused, making them more versatile and suited for complex logic and calculations.

// // Console.log: Functions with console.log() are primarily for debugging or for displaying information. They are not intended to be used for further calculations






// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // // console.log(user("umer"))  >>>>> umer login kiy hai
// // // console.log(user(""))  /*>> koye value nahi deta >>>>> login kiya hai */
// // // console.log(user())  /*>>>  undefined*/


// // // function user(name){
// // //     return(name)
// // // }

// // // console.log(user("umer"))
// // // console.log

// // function nam(user){
// //     if(user==="umer"){
// //         console.log("enter a loginId")
// //         return user;
// //     }
// // return `${user} chalo `
// // }


// // console.log(nam("umer"))
// // // console.log(name(""))
// // // console.log(name())

















//  functions day 2 // +++++++++++++++++++++++++++++++++++++

function ceko(){

}

// we dont know how many arguments will come(dont know how much items will be added , card no cart addition) 
// so we have to make parameters accordingly



// rest operator and sperad operator(...others)(same syntax but serves different meanning)
// rest ka matlb hai jitna aaraha hai usko saare ko dedo [in Array  form , >>>> then loop then + then got the sol of the problem]

// function hello(...num1){
//     return num1
// }

// // console.log(hello(200,200,121,121)) >>>>>>>>>>>>>>>>>>>>>>>>>>>Example 1 >>> rest operator

//  username is a property of the object user, 
//  but when you're inside the function, the function doesn't 
//  automatically know which object you're referring to unless you specify it. 
//  The function parameter ceko is your reference to the object being passed.



// function hello(value1 , value2 ,...num1){  
//     return num1
// }

// console.log(hello(200,200,121,121)) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>exmaple 2  >>>> pass 2 another parameters

// const hello = {
//     name: "umer",
//     age : 21

// //   }

//   function handleobject(uncle){
//     // console.log(`my name is ${uncle.name} and my age is ${uncle.age} and my school  is ${uncle.school}`)

//   }

// // handleobject(hello)
// // >>>>>>>>>>>>>>>>>>>>>>>>  anything we can write in the parameter will call object

// // another way of writing Object,,  direct objects to write
// handleobject({
//   name: "hello",
//   school : "iust",
//   age : 21
// })


// // arrays in fucntions



const myNewArray = [100, 200,100]
function arrayr(newarray){
  console.log(newarray[1])
}

// arrayr(myNewArray)
//  can do this with also 
arrayr([1,23,4])





