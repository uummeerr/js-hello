// // //singleton 

// // // literals se singeton nahibanta
// // // constructor se banta hai
// // // Object.create se banta hai, constuctor method >> singelton 


// // // 1. when we write name of system processes it like "name", since it is also String
// // // 2.keys and values

// // // const sym = Symbol("key1")


// const hello = {
//     name : "umer rahim",
//     age : 20,
//     college : "iust",
//     "full-name" : "umer rhaim bhat",0
//     [sym]: 1
// }

// // // acessing  object 
// // // console.log(hello.fullname)
// // // console.log(hello.age)
// // // console.log(hello["full-name"])

// // // console.log(hello[sym])
// // // console.log(typeof hello[sym])

// // // console.log( hello[sym])



// // // Why hello.fullname works:

// // // Even though "fullname" is defined as a string key,
// // //  JavaScript allows you to access it using dot notation
// // //  if the property name doesn't have any special characters
// // //  (like spaces or hyphens) and follows the rules for valid 
// // //  javaScript identifiers. Since fullname is a valid identifier, 
// // //  dot notation works just fine.

// // // using a symbol
// // // usko object ki keys mai add karo   , then print



// // // console.log(hello)

// // // console.log(sym.description)

// // // Symbols cannot be reassigned: If you declare a symbol with const,
// // //  you cannot change the variable to point to something else, 
// // //  like a number or a string.

// // // Changing values in objects: When you use a symbol
// // //  as a key in an object, you are associating that unique identifier
// // //   with a value, but the symbol itself does not change.




// // // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // //   
// // //  hello.age=23

// // // //  value lock
// // // Object.freeze(hello)
// // // cannot change value of Object


// // // +++++++++++++++++++++++++++++++++++++++++++++++++
// // with constructor
// const tech = new Object()
// console.log(tech)   >>>>>>> empty object  {}
// tech.name ="umer"
// tech.age = 1
// tech.email = "umerahimbhatgmail.com"

// console.log(tech)


// const tec = new Object(name = "umer", age = 12, te = 32)
// console.log(tec)
 

// const hello = new Object()
// hello.email  = 1
// hello.name = 123

// console.log(hello)

// let he = {
//      name : "umer",
//      age : 21,
//      email : "rumer054",
//      fullname :{
//         username:{
//             jsuser:{
//              user: "umer"
//             }
//         }
//      }
// }

// console.log(he.fullname.username.jsuser)
// how to acess nested objects )object inside object) by dot


// const objec1 = {
//     1 : "a",
//     2: "b"

// }

// const object2 = {
//     2:"a",
//     4: "b"
// }

// Object.assign(objec1, object2)
// console.log(objec1)
// console.log(object2)





// const obj1 = {
//     1 : "a",
//     2: "b"

// }

// const obj2 = {
//     2:"a",
//     4: "b"

// let green = Object.assign({}, obj1,obj2)
// console.log(obj1)
// console.log(obj2)
// console.log(green)
// console.log(green===obj1)
// The properties of object2 will overwrite properties in object1 if they have the same key.




// // spread operator
// const obj3 ={...obj1, ...obj2}

// console.log(obj3)
// console.log(obj1)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let tech = [
//     {
//         hello : "umer",
//         email : "rumer0650"
//     },
//     {
//         age : 21,
//         school :"iust"
//     }
// ]
// console.log(tech[1].school)
// accessing values in arrays of objects with multiple properties
// datbase se value aati hai arrays of objects maia aati
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const hello = {
//     name : "umer rahim",
//     age : 20,
//     college : "iust",
//     "full-name" : "umer rhaim bhat",
  



// // console.log(hello)
// console.log(Object.keys(hello))
// // >>>> all keys of object  (data type > array)
// console.log(Object.values(hello))
// // >>> all values of object (datatype > array)
// console.log(Object.entries(hello))
// // >>> makes all key value pair as individual array

// // console.log(hello.length)
// //  >>> not this property , instead of using this we can use  lenght property on keys values, entries 
// console.log(Object.keys(hello).length)

// // checking property/
// console.log(hello.hasOwnProperty("full-name"))
// console.log(hello.hasOwnProperty("fullname"))




// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // let and const with objects , using let we can reassign the whole object,
// //  but with const we can change values of properties/keys 

// let car = { make: "Toyota", model: "Corolla" };

// // Changing a property value
// car.model = "Camry";
// console.log(car); // Output: { make: 'Toyota', model: 'Camry' }

// // Reassigning the whole object
// car = { make: "Honda", model: "Civic" };
// console.log(car); // Output: { make: 'Honda', model: 'Civic' }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// objects de structure


const hel ={
    name : "umer",
    class : 12,
    inst :"isut"
}

console.log(hel.name)
console.log(hel.class)

let name = hel.name
console.log(name)


// What happens: You are accessing the hel.name property and storing it in a variable name manually. If you need other properties (class, inst), you would have to repeat the same steps for each property.
// 2. Destructuring:
// With destructuring, you can extract all the needed properties from the object in a single step:
// What happens: In one line, you're "unpacking" the name, class, and inst properties from the hel object. This is shorter and more efficient than manually writing each property.

// Key Differences:
// Multiple Values at Once:

// Manual Definition: You need to define each property one by one, which gets repetitive and messy if you have many properties.
// Destructuring: You can extract multiple properties in a single line, making the code cleaner and more concise.
// Less Repetition:

// Manual Definition: You repeat the object reference (hel.name, hel.class, etc.) each time you need a property.
// Destructuring: You only mention the object once, and it extracts all the values at once, reducing repetition.
// Renaming Variables:

// With destructuring, you can rename properties if needed. For example, if you want to use className instead of class, you can rename it during destructuring like this:
// javascript
// Copy code
// const { class: className } = hel;
// In manual definition, you'd have to do something like:
// javascript
// Copy code
// let className = hel.class;
// Clarity:

// Destructuring is more readable when you need to extract multiple properties, and it's clear from the structure what values you're unpacking.
// With manual variable definition, especially when there are many properties, it can become harder to maintain or read at a glance. 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const { property1, property2 } = object;


// The curly braces {} on the left side indicate that you want to destructure (unpack) properties from an object.
// Inside the curly braces, you list the properties of the object that you want to extract.
// The variable names on the left side (property1, property2) should match the property names in the object you're unpacking from.
// The object itself goes on the right side of the assignment.


 