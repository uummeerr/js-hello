// { braces}
// (parentheses)
// [sqare brackets]

//    elements it may be String, number array objector anything
// //    it may be of same or different type of elements
// collection of multiple items under one varaible > array
//  arrays are resizable

// let array = ["hello", "beauty" , "hello"]
// we cannot acess the elements of array with name or anything like that, if you want to do so do go with the number indexing
// console.log(array)



   
console.log(array[1])
console.log(array[2])
console.log(array[3])

//  arrays >>> shallow copy , whatever change u do will reflect in the orginal
// shallow copy (properties share orginal reference)
//  deep copy(properties do share orginaal reference )

// console.log(array.chraAt("hello"))   >>>>>>>>>> charaAt is only for string not for arrays



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// another way of writing arrays

// const array2 = new Array("hello",1, )
// console.log(array2[0])
// console.log(array2.length)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// array methods

 const hellwo = [0,1,2,3,4,5]
//  hello.push(6)           /* add elements at last */
//  console.log(hello)

//  hello.pop()            /* remove elemets from last*/
//  console.log(hello)

//  hello.unshift(3)      /*  add elements from starting*/
//  console.log(hello)
 
// hello.shift()           /* remove elements from startting  */
// console.log(hello)

 
// console.log(hello.includes(2))     /* true for if there is and false for not included*/  converts the result datatype to boolean
// console.log(hello.includes(9))


// console.log(hello.indexOf(2))      /* showing 1 for including*/
// console.log(hello.indexOf(9))      /* not includes showing -1 */

// //  join converts the array into string
// const newarray = hello.join()
// console.log(hello)
// console.log(newarray)


// slice and splice


// slice mai range lets say (1,3) hai to result 1,2 aayega  not changes will reflect in original array
// splice mai range toh poori aati hai but it also affects orignal array 


// console.log(hello)
// console.log(hello.slice(1,3))
// console.log(hello)


// console.log(hello.splice(1,3))
// console.log(hello)




// array 2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// array inside array
const veg = ['pizza', 'chowmien','momm']
const nonveg = ['tandoori','burger','shawarma']
 

// veg.push(nonveg)    >>>>> existing array pe push karta hai
// console.log(veg)

// // accesing elements(array) inside an array
// console.log(veg[3][0])   /* not good syntax to access */
// console.log(veg.length)



// concat   >>>>>> naye array pe push karta hai


// Yes, when you use the concat() method
//  in JavaScript, it does not modify the original array. Instead, 
//  it returns a new array with the combined elements


//  let  restro = veg.concat(nonveg)
// console.log(restro)


//  using spread operator 
// const all = [...veg, ...nonveg]
// console.log(all)



// spread out all array elements
// const he = [1,2,3, [3,3,4,[3,4,6,7]]]   /* define depth */

// const real = he.flat(Infinity)
// console.log(real)






// to check whether is arrays or to convert array form object number String
/*The method Array.isArray() is used to check if a given value is an array.

Purpose of Array.isArray():
In JavaScript, different types of data (arrays, objects, strings, etc.) may sometimes look similar or be difficult to distinguish. This method helps ensure that the variable you're working with is specifically an array.

Why You Would Use It:
You use Array.isArray() when:

You need to determine whether a value is an array before performing array-specific operations, like looping or using array methods (push, map, etc.).
You want to avoid errors when dealing with arrays, especially if the input could be of various types (strings, objects, numbers, etc.).


Array.isArray() is specifically used to determine whether a value is an array before performing operations that require it to be one.

 Array.isArray("hello")
 console.log(Array.isArray("hello"))



 console.log(Array.from("hello"))
 console.log(Array.from(true))


 console.log(Array.from({name : "hello"}))                      /* [] represents empty array ,can't converted*/
 
// i have to tell here whehter i have to convert to values / keys


 let score1 = 100
 let score2 = 300
 let score3 = 200

//  console.log(score1,score3,score2)


 console.log(Array.of(score1, score2 ,score3))  /*>>>>>>> returns new array from set of elements*/
























