// let hello = 234
// let  hello1 = "hello"
// let hello2 = "console"



// console.log(hello1+hello2+hello4)

// concatinate 



// string interpolation , way to concatinate strings
// we use of backticks
// we are making placeholder , and inject varaibles in them
// readable , in use  backend , can ue methods easily after name.touppercase
const name = "hello"
const age = 23
console.log(`this is my name ${name} and my age is ${age}`)



// string Object  another way of writing string / syntax of string

const hello = new String ("hellow")

// How JavaScript Handles String Methods

// Even though str is a string primitive, JavaScript allows you to use methods and properties on it. Here's how it works:

// 1. Temporary Conversion (Boxing): When you call a method or property on a string primitive, JavaScript automatically converts the primitive into a String object. This temporary String object allows access to methods and properties, and then it's discarded. This process is called boxing.

// 2. Method Access: The method you call (e.g., toUpperCase()) operates on the temporarily created String object. After the method is executed, the temporary String object is discarded, and you get the result.


// 0th position "h"
// 1th position "e"
// 2th position "l"
// 3th position "l"
// 4th position "o"

// here string is an object here we can use to get the property
// lenght property
// and also methods/fuinctions as well e.g, uppercase ,indexof,CharAt , bold 

console.log(hello.toUpperCase())
console.log(hello.toLowerCase())
// it doesnot change our orginnal string since it is string and is not having original reference 
console.log(hello.length)
console.log(hello.charAt(2))
// 2 position pe konsa character hai
console.log(hello.indexOf("e"))
// here you get to access to what position of charater is it


// in slicing and substring last character is not printed 3,4 here 4th will not  printed
// in substring negative value is not accessed , rather it starts from 0
// but in slice we can get access to negative numbering as well 



const neww = hello.substring(2,4)
console.log(neww)


let blue = "hiteshyt"
console.log(blue)
console.log(blue.slice(-4,5))

// trim to trime spaces , sometimes user fills spaces deliberatly or by mistake so not save that in database we use of this
let first = "  asdf   "
console.log(first)
console.log(first.trim())


// for replacing

// In JavaScript, strings are indeed immutable, meaning that once a string is created, its content cannot be changed. However, methods like replace() do not modify the original string; instead, they return a new string with the modifications applie

let url = "www.hello.com"
console.log(url.replace("hello" , "uncle"))
// to check whether it is or Not

console.log(url.includes('hello'))
console.log(url.includes('blue'))



// conveting strings into arrays
// many ways you can differenctaite on the basis of spaces, letters dash


let helloo = "he-er-ercedfefg-fefe"
console.log(helloo.split("-"))


